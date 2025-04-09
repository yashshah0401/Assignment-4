import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  test('should calculate paint cost correctly for positive values', () => {
    expect(calculatePaintCost(10, 5)).toBe(50);
    expect(calculatePaintCost(20, 7.5)).toBe(150);
    expect(calculatePaintCost(15, 10)).toBe(150);
  });

  test('should return 0 when paint required is 0', () => {
    expect(calculatePaintCost(0, 5)).toBe(0);
  });

  test('should return 0 when cost per liter is 0', () => {
    expect(calculatePaintCost(10, 0)).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(calculatePaintCost(-10, 5)).toBe(-50);
    expect(calculatePaintCost(10, -5)).toBe(-50);
    expect(calculatePaintCost(-10, -5)).toBe(50);
  });

  test("should handle decimal values for paint required and cost per liter", () => {
    const result = calculatePaintCost(2.5, 14.99); // 2.5 * 14.99 = 37.475
    expect(result).toBeCloseTo(37.48, 2);
  });

  test("should handle negative paint required or cost per liter", () => {
    expect(calculatePaintCost(-1, 10)).toBe(-10);   // negative cost
    expect(calculatePaintCost(1, -10)).toBe(-10);   // negative cost
    expect(calculatePaintCost(-1, -10)).toBe(10);   // positive cost
  });
});
