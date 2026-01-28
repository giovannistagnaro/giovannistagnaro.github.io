export function clamp(value: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, value));
}
