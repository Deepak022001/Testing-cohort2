import { describe, it, expect } from '@jest/globals';
import { sum } from '../index';
// supposed to add a bunch of test cases
describe('sum', () => {
  it('should be able to add two positive numbers', () => {
    const ans = sum(2, 3);
    expect(ans).toBe(5);
  });
  it('should be able to add two positive numbers', () => {
    const ans = sum(-2, -3);
    expect(ans).toBe(-5);
  });
});
