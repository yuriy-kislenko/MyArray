import MyArray from './index';

describe('Class MyArray', () => {
  describe('tests for push method', () => {
    test('instance should have method push', () => {
      const arr = new MyArray(1, 2, 3);
      expect(new MyArray().push).toBeInstanceOf(Function);
    });
    test('instance has not own property push', () => {
      const arr = new MyArray(1, 2, 3);
      expect(arr.hasOwnProperty('push')).toBeFalsy();
    });
    test('method returns new length', () => {
      const arr = new MyArray(1, 2, 3);
      expect(arr.push(4, 5, 6)).toEqual(arr.length);
    });
    test('method must increment current length by 1, if 1 argument is put ', () => {
      const arr = new MyArray(1, 2, 3, 4);
      arr.push(2);
      expect(arr.length).toBe(5);
    });
    test("method doesn't change length, if 0 argument is put", () => {
      const arr = new MyArray(1, 2, 3, 4);
      arr.push();
      expect(arr.length).toBe(4);
    });
    test("pushed element must be the last", () => {
      const arr = new MyArray(1, 2, 3, 4);
      const a = 5;
      arr.push(a);
      expect(arr[arr.length - 1]).toEqual(a);
    });
    test("should allow to add multiple items", () => {
      const arr = new MyArray(1, 2, 3, 4);
      expect(arr.push(5, 6, 7)).toEqual(arr.length);
    });
    test("push 1 element to an empty array, it`s length must be 1", () => {
      const arr = new MyArray();
      expect(arr.push(1)).toEqual(1);
    });
    test("returns undefined if there is no such index", () => {
      const arr = new MyArray(1, 2, 3, 4);
      arr.push(5);
      expect(arr[-1]).toBeUndefined();
      expect(arr[arr.length]).toBeUndefined();
    });
  });
});