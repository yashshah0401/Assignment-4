export default function estimatePaintingTime(area: number, speed: number): number {
  if (speed < 0) return NaN;  // Handle negative speed
  if (speed === 0) return Infinity;  // Handle speed = 0
  return area / speed;  // Allow negative area to return valid time
}
