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

// test value equals

const a = { a: 1 };
test('to equal', () => {
  expect(a).toEqual({ a: 1 });
});

// toBeNull

const b = null;
test('to be null', () => {
  expect(b).toBeNull();
});

const c = undefined;
test('to be undefined', () => {
  expect(c).toBeUndefined();
});
