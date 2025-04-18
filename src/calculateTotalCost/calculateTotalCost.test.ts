import calculateTotalCost from './calculateTotalCost';

describe('calculateTotalCost', () => {
  test('should calculate total cost correctly for positive values', () => {
    expect(calculateTotalCost(100, 50)).toBe(150);
    expect(calculateTotalCost(200, 75)).toBe(275);
    expect(calculateTotalCost(150, 100)).toBe(250);
  });

  test('should return paint cost when labor cost is 0', () => {
    expect(calculateTotalCost(100, 0)).toBe(100);
  });

  test('should return labor cost when paint cost is 0', () => {
    expect(calculateTotalCost(0, 50)).toBe(50);
  });

  test('should handle negative values correctly', () => {
    expect(calculateTotalCost(-100, 50)).toBe(-50);
    expect(calculateTotalCost(100, -50)).toBe(50);
    expect(calculateTotalCost(-100, -50)).toBe(-150);
  });

  test('should return 0 when both costs are 0', () => {
    expect(calculateTotalCost(0, 0)).toBe(0);
  });

  // New test cases

  test('should handle very large numbers correctly', () => {
    expect(calculateTotalCost(1e6, 1e6)).toBe(2e6);  // 1,000,000 + 1,000,000 = 2,000,000
  });

  test('should handle decimal values correctly', () => {
    expect(calculateTotalCost(99.99, 50.50)).toBeCloseTo(150.49, 2);
  });

  test('should return correct result when both values are negative', () => {
    expect(calculateTotalCost(-10.5, -20.5)).toBe(-31); // -10.5 + (-20.5) = -31
  });
});
