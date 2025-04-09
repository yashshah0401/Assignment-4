import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  test('should calculate painting time correctly for positive values', () => {
    expect(estimatePaintingTime(100, 10)).toBe(10);
    expect(estimatePaintingTime(200, 20)).toBe(10);
    expect(estimatePaintingTime(150, 15)).toBe(10);
  });

  test('should return Infinity for painting speed of 0', () => {
    expect(estimatePaintingTime(100, 0)).toBe(Infinity);
  });

  test('should handle area of 0 correctly', () => {
    expect(estimatePaintingTime(0, 10)).toBe(0);
  });
  
  test('should handle very large values correctly', () => {
    expect(estimatePaintingTime(1e6, 10)).toBe(1e5);  // 1,000,000 / 10 = 100,000
  });

  test('should return 0 when area is 0', () => {
    expect(estimatePaintingTime(0, 10)).toBe(0);
  });

  test('should return NaN for negative speed', () => {
    expect(estimatePaintingTime(100, -10)).toBeNaN();
  });
});

