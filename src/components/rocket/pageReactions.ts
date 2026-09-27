/**
 * Makes the rest of the page react to the launch without touching React state:
 * a ramped rumble on the page wrapper and a spring-driven sideways nudge on any
 * element tagged `data-launch-react` as the rocket passes it.
 *
 * Only `transform` is written, and everything is removed on dispose.
 */

interface Reactor {
  el: HTMLElement;
  cx: number;
  cy: number;
  /** Free space to the left/right viewport edge, so a push never clips content off-screen. */
  roomLeft: number;
  roomRight: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export interface FrameInput {
  shake: number;
  rocketX: number;
  rocketY: number;
  /** Nudging only happens while the rocket is actually in flight. */
  rocketActive: boolean;
  dt: number;
}

/** How far an element is shoved sideways as the rocket passes it. */
const NUDGE_PX = 72;
/** How far every element is thrown away from the pad by the ignition shockwave. */
const BLAST_PX = 48;
const MAX_ROTATE_DEG = 4.5;
/** Under-damped so elements overshoot and wobble back. */
const STIFFNESS = 150;
const DAMPING = 11;

export const createPageReactions = (root: HTMLElement | null) => {
  let reactors: Reactor[] = [];
  let dirty = true;
  /** 1 right after ignition, decays towards 0. */
  let blast = 0;

  const markDirty = () => {
    dirty = true;
  };

  const measure = () => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-launch-react]"));
    const byEl = new Map(reactors.map((r) => [r.el, r]));
    reactors = els.map((el) => {
      const rect = el.getBoundingClientRect();
      const prev = byEl.get(el);
      return {
        el,
        cx: rect.left + rect.width / 2,
        cy: rect.top + rect.height / 2,
        roomLeft: Math.max(0, rect.left - 4),
        roomRight: Math.max(0, window.innerWidth - rect.right - 4),
        x: prev?.x ?? 0,
        y: prev?.y ?? 0,
        vx: prev?.vx ?? 0,
        vy: prev?.vy ?? 0,
      };
    });
    dirty = false;
  };

  window.addEventListener("scroll", markDirty, { passive: true });
  window.addEventListener("resize", markDirty);
  if (root) root.style.willChange = "transform";

  /** Fire the ignition shockwave: everything is thrown outward from the pad. */
  const ignite = () => {
    blast = 1;
  };

  const frame = ({ shake, rocketX, rocketY, rocketActive, dt }: FrameInput) => {
    if (root) {
      if (shake > 0.05) {
        const sx = (Math.random() - 0.5) * 2 * shake;
        const sy = (Math.random() - 0.5) * 2 * shake;
        root.style.transform = `translate3d(${sx.toFixed(2)}px, ${sy.toFixed(2)}px, 0)`;
      } else if (root.style.transform) {
        root.style.transform = "";
      }
    }

    if (dirty) measure();

    blast *= Math.pow(0.08, dt); // ~90% gone after one second
    const padX = window.innerWidth / 2;
    const padY = window.innerHeight;

    for (let i = 0; i < reactors.length; i++) {
      const r = reactors[i];
      let tx = 0;
      let ty = 0;

      if (rocketActive) {
        const dx = r.cx - rocketX;
        const dy = r.cy - rocketY;
        const vertical = Math.exp(-(dy * dy) / (2 * 230 * 230));
        const horizontal = Math.exp(-(dx * dx) / (2 * 420 * 420));
        const dir = dx === 0 ? 1 : Math.sign(dx);
        const influence = vertical * horizontal;
        tx += dir * NUDGE_PX * influence;
        // Sucked slightly towards the rocket's wake, then released.
        ty += Math.sign(dy) * NUDGE_PX * 0.25 * influence;
      }

      if (blast > 0.01) {
        const dx = r.cx - padX;
        const dy = r.cy - padY;
        const dist = Math.max(80, Math.hypot(dx, dy));
        const falloff = Math.min(1, 900 / dist);
        tx += (dx / dist) * BLAST_PX * blast * falloff;
        ty += (dy / dist) * BLAST_PX * blast * falloff;
      }

      // Slide up to the viewport edge, never past it.
      tx = Math.max(-r.roomLeft, Math.min(r.roomRight, tx));

      r.vx += (tx - r.x) * STIFFNESS * dt - r.vx * DAMPING * dt;
      r.vy += (ty - r.y) * STIFFNESS * dt - r.vy * DAMPING * dt;
      r.x += r.vx * dt;
      r.y += r.vy * dt;

      const moving = Math.abs(r.x) > 0.05 || Math.abs(r.y) > 0.05 || Math.abs(r.vx) > 0.5 || Math.abs(r.vy) > 0.5;
      if (moving) {
        const rot = Math.max(-MAX_ROTATE_DEG, Math.min(MAX_ROTATE_DEG, (r.x / NUDGE_PX) * MAX_ROTATE_DEG));
        const scale = 1 + Math.min(0.06, Math.hypot(r.x, r.y) / NUDGE_PX / 14);
        r.el.style.transform = `translate3d(${r.x.toFixed(2)}px, ${r.y.toFixed(2)}px, 0) rotate(${rot.toFixed(3)}deg) scale(${scale.toFixed(4)})`;
      } else if (r.el.style.transform) {
        r.x = r.y = r.vx = r.vy = 0;
        r.el.style.transform = "";
      }
    }
  };

  const dispose = () => {
    window.removeEventListener("scroll", markDirty);
    window.removeEventListener("resize", markDirty);
    if (root) {
      root.style.transform = "";
      root.style.willChange = "";
    }
    for (const r of reactors) r.el.style.transform = "";
    reactors = [];
  };

  return { frame, ignite, dispose };
};
