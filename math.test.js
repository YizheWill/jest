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

const d = 'd';
test('to be defined', () => {
  expect(d).toBeDefined();
});
test('to be falsy', () => {
  expect(c).toBeFalsy();
});
test('to be truthy', () => {
  expect(d).toBeTruthy();
});

// Number related
// toBeGreaterThan, toBeLessThan, toBeGreaterThanOrEqual, toBeLessThanOrEqual
test('to be greater than', () => {
  expect(10).toBeGreaterThan(2);
});
// toBeCloseTo

test('to be close to', () => {
  const first = 0.1;
  const second = 0.2;
  // expect(first + second).toEqual(0.3);
  // won't pass because javascript sucks
  expect(first + second).toBeCloseTo(0.3);
});

// STRING

test('toMatch', () => {
  const url = 'http://www.example.com';
  expect(url).toMatch(/www/);
});

// ARRAY, SET
// ** contain is frequently used
test('toContain', () => {
  const arr = ['a', 'b', 'c', 'd'];
  expect(arr).toContain('d');
});
test('toNotContain', () => {
  const arr = ['a', 'b', 'c', 'd'];
  expect(arr).not.toContain('f');
});
