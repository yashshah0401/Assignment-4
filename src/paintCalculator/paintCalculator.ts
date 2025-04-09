/**
 * Calculates the total paint area needed for multiple copies of a canvas
 * with a rectangle and 3 triangles at the base.
 */

export function calculatePaintNeeded(width: number, height: number, copies: number): number {
  if (width < 0 || height < 0 || copies < 0) return NaN;

  const rectangleArea = width * height;
  const triangleBase = width / 3;
  const triangleArea = 0.5 * triangleBase * height;
  const totalAreaPerArtwork = rectangleArea + (3 * triangleArea);

  return totalAreaPerArtwork * copies;
}
