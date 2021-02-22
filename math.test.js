import { add, minus, multi } from './math';

test('test add', () => {
  expect(add(1, 2)).toBe(3);
});
test('test minus', () => {
  expect(minus(1, 2)).toBe(-1);
});
test('test multi', () => {
  expect(multi(1, 2)).toBe(2);
});
