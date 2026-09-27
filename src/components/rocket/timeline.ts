/**
 * Single source of truth for the launch choreography (milliseconds from click).
 *
 *  0 ─ countdown ─┬─ ignition hold ─┬─ flight ─┬─ smoke lingers ─┤ done
 *    T-3 … T-1     IGNITION_AT       LIFTOFF_AT  GONE_AT           DONE_AT
 *
 * The rocket stays below the viewport until LIFTOFF_AT, then emerges slowly and
 * accelerates hard towards the top of the screen.
 */
export const COUNTDOWN_SECONDS = 3;
export const COUNTDOWN_MS = COUNTDOWN_SECONDS * 1000;

/** Engine sputters and smoke starts during the last second of the countdown. */
export const PRE_IGNITION_MS = 1000;
/** Rocket vibrates on the pad at full thrust before it lifts. */
export const HOLD_MS = 650;
export const FLIGHT_MS = 4800;
/** Flight easing: slow emergence, most of the travel in the last third. */
export const flightEase = (t: number) => Math.pow(t, 2.7);
/** Smoke keeps drifting after the rocket has left the screen. */
export const LINGER_MS = 2400;

export const IGNITION_AT = COUNTDOWN_MS;
export const LIFTOFF_AT = IGNITION_AT + HOLD_MS;
export const GONE_AT = LIFTOFF_AT + FLIGHT_MS;
export const DONE_AT = GONE_AT + LINGER_MS;

/** Gentle alternative used when the visitor prefers reduced motion. */
export const REDUCED_FLIGHT_MS = 1600;

export type LaunchPhase = "countdown" | "ignition" | "flight" | "linger";

const lerp = (a: number, b: number, t: number) => a + (b - a) * Math.min(1, Math.max(0, t));

/** Page shake amplitude in px for a given elapsed time. */
export const shakeAmplitude = (elapsed: number): number => {
  const spoolStart = IGNITION_AT - PRE_IGNITION_MS;
  if (elapsed < spoolStart) return lerp(0, 0.8, elapsed / spoolStart);
  if (elapsed < IGNITION_AT) return lerp(0.8, 2.4, (elapsed - spoolStart) / PRE_IGNITION_MS);
  if (elapsed < LIFTOFF_AT) return lerp(9, 5, (elapsed - IGNITION_AT) / HOLD_MS);
  if (elapsed < GONE_AT) {
    const f = (elapsed - LIFTOFF_AT) / FLIGHT_MS;
    return 6 * Math.pow(1 - f, 1.5);
  }
  return 0;
};
