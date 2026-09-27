import { MutableRefObject, useEffect, useRef } from "react";
import { MotionValue } from "framer-motion";

export interface Emitter {
  /** Nozzle position in viewport px. */
  x: number;
  y: number;
}

interface ExhaustCanvasProps {
  emitterRef: MutableRefObject<Emitter>;
  thrust: MotionValue<number>;
  isDark: boolean;
  /** While true particles keep spawning; when false the loop runs until every particle has died. */
  active: boolean;
  onDrained: () => void;
  zIndex: number;
}

const FIRE = 0;
const SMOKE = 1;

interface Particle {
  kind: 0 | 1;
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
  life: number;
  size: number;
  spin: number;
}

const MAX_PARTICLES = 420;
const MAX_DPR = 1.5;
const GROUND_MARGIN = 10;

const rand = (min: number, max: number) => min + Math.random() * (max - min);

/** Pre-render one soft radial puff so every particle is a cheap drawImage. */
const makeSprite = (stops: [number, string][]) => {
  const size = 64;
  const sprite = document.createElement("canvas");
  sprite.width = size;
  sprite.height = size;
  const g = sprite.getContext("2d");
  if (!g) return sprite;
  const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  for (const [offset, color] of stops) grad.addColorStop(offset, color);
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);
  return sprite;
};

/**
 * One canvas for every particle. Fire is short-lived and bright, smoke is slow and
 * billows; anything that reaches the bottom of the viewport is deflected sideways so
 * the pad produces a spreading cloud instead of exhaust disappearing off-screen.
 */
const ExhaustCanvas = ({ emitterRef, thrust, isDark, active, onDrained, zIndex }: ExhaustCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeRef = useRef(active);
  activeRef.current = active;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const particles: Particle[] = [];
    let dpr = 1;
    let width = 0;
    let height = 0;
    let frame = 0;
    let last = performance.now();
    let drained = false;
    let spawnCarry = 0;

    const resize = () => {
      dpr = Math.min(MAX_DPR, window.devicePixelRatio || 1);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const smokeRgb = isDark ? "196, 198, 210" : "104, 108, 124";
    const smokeSprite = makeSprite([
      [0, `rgba(${smokeRgb}, 0.9)`],
      [0.45, `rgba(${smokeRgb}, 0.5)`],
      [1, `rgba(${smokeRgb}, 0)`],
    ]);
    const fireSprite = makeSprite([
      [0, "rgba(255, 255, 240, 1)"],
      [0.3, "rgba(253, 224, 71, 0.95)"],
      [0.65, "rgba(251, 146, 60, 0.7)"],
      [1, "rgba(239, 68, 68, 0)"],
    ]);
    const budget = width < 600 ? 0.6 : 1;

    const spawn = (t: number, dt: number) => {
      const { x, y } = emitterRef.current;
      // Fire: ~9/frame at full thrust, smoke: ~4/frame, scaled to real frame time.
      spawnCarry += (t * 13 * budget * dt) / (1 / 60);
      let n = Math.floor(spawnCarry);
      spawnCarry -= n;
      while (n-- > 0 && particles.length < MAX_PARTICLES) {
        const smoke = Math.random() < 0.3;
        if (smoke) {
          particles.push({
            kind: SMOKE,
            x: x + rand(-8, 8),
            y: y + rand(0, 6),
            vx: rand(-80, 80),
            vy: rand(120, 260),
            age: 0,
            life: rand(1.4, 2.8),
            size: rand(12, 22),
            spin: rand(0, Math.PI * 2),
          });
        } else {
          particles.push({
            kind: FIRE,
            x: x + rand(-6, 6),
            y: y,
            vx: rand(-45, 45),
            vy: rand(380, 720),
            age: 0,
            life: rand(0.22, 0.5),
            size: rand(6, 14) * (0.4 + t * 0.6),
            spin: 0,
          });
        }
      }
    };

    const step = (dt: number) => {
      const ground = height - GROUND_MARGIN;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.age += dt;
        if (p.age >= p.life) {
          particles[i] = particles[particles.length - 1];
          particles.pop();
          continue;
        }
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        if (p.kind === SMOKE) {
          const drag = Math.pow(0.35, dt);
          p.vx *= drag;
          p.vy = p.vy * drag - 40 * dt; // slow, then start rising like hot gas
          // Wander so the plume billows instead of stacking in a straight column.
          p.vx += (Math.sin(p.age * 2.6 + p.spin) * 60 + (Math.random() - 0.5) * 140) * dt;
          p.size += 34 * dt;
        } else {
          p.size *= Math.pow(0.15, dt);
        }

        // Deflect off the bottom edge so the pad exhaust spreads sideways.
        if (p.y > ground && p.vy > 0) {
          p.y = ground;
          const side = p.vx === 0 ? (Math.random() < 0.5 ? -1 : 1) : Math.sign(p.vx);
          p.vx = side * Math.max(Math.abs(p.vx) * 1.6, Math.abs(p.vy) * 0.45);
          p.vy = -Math.abs(p.vy) * 0.12;
          if (p.kind === FIRE) p.life = Math.min(p.life, p.age + 0.12);
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Smoke first, normal blending.
      ctx.globalCompositeOperation = "source-over";
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.kind !== SMOKE) continue;
        const f = p.age / p.life;
        // Quick fade-in, slow fade-out.
        ctx.globalAlpha = Math.min(1, f * 6) * (1 - f) * (1 - f) * 0.38;
        ctx.drawImage(smokeSprite, p.x - p.size, p.y - p.size, p.size * 2, p.size * 2);
      }

      // Fire on top; additive on dark backgrounds where it reads as light.
      ctx.globalCompositeOperation = isDark ? "lighter" : "source-over";
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.kind !== FIRE) continue;
        const f = p.age / p.life;
        ctx.globalAlpha = 1 - f;
        const r = Math.max(1, p.size) * 1.6;
        ctx.drawImage(fireSprite, p.x - r, p.y - r, r * 2, r * 2);
      }
      ctx.globalAlpha = 1;
    };

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      const t = activeRef.current ? thrust.get() : 0;
      if (t > 0.01) spawn(t, dt);
      step(dt);
      draw();

      if (!activeRef.current && particles.length === 0) {
        if (!drained) {
          drained = true;
          onDrained();
        }
        return;
      }
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
    // The loop reads `active` through a ref so a prop change never restarts it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex }}
    />
  );
};

export default ExhaustCanvas;
