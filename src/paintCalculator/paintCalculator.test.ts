import { calculatePaintNeeded } from './paintCalculator';

describe("calculatePaintNeeded", () => {
  test("should calculate paint for 1 copy of 3x2m", () => {
    const result = calculatePaintNeeded(3, 2, 1);
    // Rectangle = 3 * 2 = 6
    // Each triangle = 0.5 * (3/3) * 2 = 1
    // Total = 6 + 3 * 1 = 9
    expect(result).toBeCloseTo(9);
  });

test("should calculate paint for 5000 copies of 3x2m", () => {
    const result = calculatePaintNeeded(3, 2, 5000);
    expect(result).toBeCloseTo(45000);
  });

  test("should return 0 when copies = 0", () => {
    const result = calculatePaintNeeded(3, 2, 0);
    expect(result).toBe(0);
  });
});
