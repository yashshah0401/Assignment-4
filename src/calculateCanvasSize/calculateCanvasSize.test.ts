import calculateCanvasSize from './calculateCanvasSize';

describe('calculateCanvasSize', () => {
  test('should calculate canvas area correctly', () => {
    const result = calculateCanvasSize('5', '10'); // 5 × 10 = 50
    expect(result).toBe(50);
  });
});
