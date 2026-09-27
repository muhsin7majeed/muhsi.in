import { useCallback, useEffect, useRef, useState } from "react";
import { Box, Portal, Text, useColorMode } from "@chakra-ui/react";
import {
  AnimatePresence,
  animate,
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import type { AnimationPlaybackControls } from "framer-motion";

import RocketSvg, { ROCKET_NOZZLE_Y, ROCKET_VIEWBOX_H, ROCKET_VIEWBOX_W } from "./RocketSvg";
import ExhaustCanvas, { Emitter } from "./ExhaustCanvas";
import { createPageReactions } from "./pageReactions";
import {
  COUNTDOWN_SECONDS,
  DONE_AT,
  FLIGHT_MS,
  GONE_AT,
  IGNITION_AT,
  LIFTOFF_AT,
  LaunchPhase,
  PRE_IGNITION_MS,
  REDUCED_FLIGHT_MS,
  flightEase,
  shakeAmplitude,
} from "./timeline";

const Z = { glow: 1240, canvas: 1250, rocket: 1300, hud: 1400, flash: 1450 };
/** Where the nozzle would sit on the pad, in px above the bottom edge of the viewport. */
const PAD_LIFT = 24;
/** Extra clearance so the flame is hidden too while the rocket waits below the fold. */
const OFFSCREEN_PAD = 24;
/** The element the rumble is applied to; the launch itself renders outside it. */
const SHAKE_ROOT_ID = "page-root";

const rocketSize = () => {
  const w = Math.round(Math.min(150, Math.max(96, window.innerWidth * 0.12)));
  return { w, h: Math.round((w * ROCKET_VIEWBOX_H) / ROCKET_VIEWBOX_W) };
};

interface LaunchSequenceProps {
  onDone: () => void;
}

/**
 * Everything that happens after the navbar button is pressed. Mounted only for the
 * duration of one launch and torn down completely afterwards.
 */
const LaunchSequence = ({ onDone }: LaunchSequenceProps) => {
  const reduced = Boolean(useReducedMotion());
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [phase, setPhase] = useState<LaunchPhase>("countdown");
  const [count, setCount] = useState(COUNTDOWN_SECONDS);
  const [hudVisible, setHudVisible] = useState(true);
  const [exhaustActive, setExhaustActive] = useState(true);
  const [size] = useState(rocketSize);

  const startRef = useRef(performance.now());
  const doneRef = useRef(false);
  const phaseRef = useRef<LaunchPhase>(phase);
  phaseRef.current = phase;
  const emitterRef = useRef<Emitter>({ x: window.innerWidth / 2, y: window.innerHeight - PAD_LIFT });
  const reactionsRef = useRef<ReturnType<typeof createPageReactions> | null>(null);

  // Waits fully below the viewport (flame included) until liftoff.
  const y = useMotionValue(reduced ? 0 : size.h + OFFSCREEN_PAD);
  const x = useMotionValue(0);
  const rotate = useMotionValue(0);
  const thrust = useMotionValue(0);
  const flash = useMotionValue(0);
  const rocketOpacity = useMotionValue(reduced ? 0 : 1);
  const glowOpacity = useTransform(thrust, [0, 1], [0, 0.85]);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    onDone();
  }, [onDone]);

  useEffect(() => {
    const timers: number[] = [];
    const anims: AnimationPlaybackControls[] = [];
    const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));
    const run = (controls: AnimationPlaybackControls) => anims.push(controls);

    reactionsRef.current = reduced ? null : createPageReactions(document.getElementById(SHAKE_ROOT_ID));

    if (reduced) run(animate(rocketOpacity, 1, { duration: 0.4 }));

    // Countdown ticks: T-3 is shown immediately.
    for (let i = 1; i < COUNTDOWN_SECONDS; i++) {
      at(i * 1000, () => setCount(COUNTDOWN_SECONDS - i));
    }

    // Engine spool-up during the last second.
    at(IGNITION_AT - PRE_IGNITION_MS, () => {
      run(animate(thrust, reduced ? 0.6 : 0.3, { duration: 0.7, ease: "easeInOut" }));
    });

    at(IGNITION_AT, () => {
      setPhase("ignition");
      run(animate(thrust, 1, { duration: 0.18 }));
      if (!reduced) {
        run(animate(flash, [0, 1, 0], { duration: 0.5, times: [0, 0.12, 1], ease: "easeOut" }));
        reactionsRef.current?.ignite();
      }
    });

    at(LIFTOFF_AT, () => {
      setPhase("flight");
      if (reduced) {
        const d = REDUCED_FLIGHT_MS / 1000;
        run(animate(y, -window.innerHeight * 0.45, { duration: d, ease: "easeIn" }));
        run(animate(rocketOpacity, 0, { duration: d, ease: "easeIn" }));
        return;
      }
      const d = FLIGHT_MS / 1000;
      // From fully below the fold to fully above it: slow emergence, then a hard burn.
      const travel = -(window.innerHeight + size.h + 60);
      run(animate(y, travel, { duration: d, ease: flightEase }));
      run(animate(x, Math.min(70, window.innerWidth * 0.07), { duration: d, ease: flightEase }));
      run(animate(rotate, -8, { duration: d, ease: flightEase }));
    });

    at(LIFTOFF_AT + 1100, () => setHudVisible(false));

    if (reduced) {
      at(LIFTOFF_AT + REDUCED_FLIGHT_MS + 250, finish);
    } else {
      at(GONE_AT, () => {
        setPhase("linger");
        run(animate(thrust, 0, { duration: 0.25 }));
        setExhaustActive(false);
      });
      // Safety net in case the canvas never reports itself drained.
      at(DONE_AT + 1500, finish);
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") finish();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      timers.forEach((id) => clearTimeout(id));
      anims.forEach((controls) => controls.stop());
      window.removeEventListener("keydown", onKey);
      reactionsRef.current?.dispose();
      reactionsRef.current = null;
    };
    // The choreography is fixed for the lifetime of one launch.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useAnimationFrame((_time, delta) => {
    const dt = Math.min(0.05, delta / 1000);
    const elapsed = performance.now() - startRef.current;
    const rocketX = window.innerWidth / 2 + x.get();
    const nozzleY = window.innerHeight - PAD_LIFT + y.get();
    emitterRef.current.x = rocketX;
    // While the rocket waits below the fold its exhaust still boils up from the bottom edge.
    emitterRef.current.y = Math.min(nozzleY, window.innerHeight + 4);

    reactionsRef.current?.frame({
      shake: shakeAmplitude(elapsed),
      rocketX,
      rocketY: nozzleY - size.h * 0.4,
      rocketActive: phaseRef.current === "flight",
      dt,
    });
  });

  const headline =
    phase === "countdown" ? "This is not a drill. Stand clear!" : phase === "ignition" ? "Main engine start" : "We have liftoff";
  const big = phase === "countdown" ? `T-${count}` : phase === "ignition" ? "IGNITION" : "LIFTOFF!";

  return (
    <Portal>
      {!reduced && (
        <motion.div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: Z.flash,
            pointerEvents: "none",
            opacity: flash,
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(255,214,150,0.95) 0%, rgba(255,255,255,0.55) 35%, rgba(255,255,255,0) 70%)",
          }}
        />
      )}

      {!reduced && (
        <motion.div
          aria-hidden="true"
          style={{
            position: "fixed",
            left: "50%",
            bottom: -120,
            width: "70vw",
            maxWidth: 900,
            height: 320,
            x: "-50%",
            zIndex: Z.glow,
            pointerEvents: "none",
            opacity: glowOpacity,
            mixBlendMode: isDark ? "screen" : "multiply",
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(255,150,60,0.9) 0%, rgba(255,110,30,0.45) 35%, rgba(255,110,30,0) 70%)",
          }}
        />
      )}

      {!reduced && (
        <ExhaustCanvas
          emitterRef={emitterRef}
          thrust={thrust}
          isDark={isDark}
          active={exhaustActive}
          onDrained={finish}
          zIndex={Z.canvas}
        />
      )}

      <motion.div
        aria-hidden="true"
        style={{
          position: "fixed",
          left: "50%",
          bottom: PAD_LIFT - Math.round(size.h * (1 - ROCKET_NOZZLE_Y / ROCKET_VIEWBOX_H)),
          width: size.w,
          height: size.h,
          marginLeft: -size.w / 2,
          x,
          y,
          rotate,
          opacity: rocketOpacity,
          transformOrigin: "50% 76%",
          zIndex: Z.rocket,
          pointerEvents: "none",
          willChange: "transform",
        }}
      >
        <RocketSvg thrust={thrust} />
      </motion.div>

      <div
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: Z.hud,
          pointerEvents: "none",
        }}
      >
        <AnimatePresence>
          {hudVisible && (
            <motion.div
              key="hud"
              role="status"
              aria-live="polite"
              initial={reduced ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.08, y: -24 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Box
                bg="rgba(220, 38, 38, 0.92)"
                color="white"
                px={{ base: 6, md: 10 }}
                py={{ base: 5, md: 7 }}
                rounded="2xl"
                boxShadow="0 20px 60px rgba(0, 0, 0, 0.35)"
                borderWidth="2px"
                borderColor="rgba(255, 255, 255, 0.35)"
                backdropFilter="blur(6px)"
                textAlign="center"
                maxW="90vw"
              >
                <Text
                  fontSize={{ base: "xs", md: "md" }}
                  fontWeight="semibold"
                  letterSpacing="0.16em"
                  textTransform="uppercase"
                  opacity={0.9}
                >
                  {headline}
                </Text>
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={big}
                    initial={reduced ? false : { scale: 1.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={reduced ? undefined : { scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    <Text
                      fontSize={phase === "countdown" ? { base: "5xl", md: "7xl" } : { base: "4xl", md: "6xl" }}
                      fontWeight="black"
                      lineHeight="1"
                      mt={2}
                      sx={{ fontVariantNumeric: "tabular-nums" }}
                    >
                      {big}
                    </Text>
                  </motion.div>
                </AnimatePresence>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Portal>
  );
};

export default LaunchSequence;
