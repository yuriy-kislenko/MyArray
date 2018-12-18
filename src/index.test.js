import MyArray from './index';

describe('Class MyArray', () => {
  describe('tests for method map', () => {

    test('if custom context doesn\'t provided, use current context', () => {
      const arr = new MyArray(1,4,0);
      const testArr = [];
      const user = {
        name: 'ivan',
        testForEach () {
          arr.forEach(() => testArr.push(this.name));
        }
      }
      user.testForEach()
      expect(testArr.toString()).toBe('ivan,ivan,ivan');
    });

  });

  describe('tests for method pop', () => {

    test('instance has method pop', () => {
      const arr = new MyArray(1,4,0);

      expect(arr.pop).toBeInstanceOf(Function);
    });

    test('instance has not Own Property pop', () => {
      const arr = new MyArray(1,4,0);

      expect(arr.hasOwnProperty('pop')).toBeFalsy();
    });

    test('Method must return deleted element', () => {
      const arr = new MyArray(1,4,0);

      expect(arr.pop()).toBe(0);
    });

    test('Method must delete last element from array', () => {
      const arr = new MyArray(1,4,0);
      const deleted = arr.pop();

      expect(arr[3]).toBeUndefined();
      expect(deleted).toBe(0);
    });

    test('Length of array must reduce by 1', () => {
      const arr = new MyArray(1,4,0);
      arr.pop();

      expect(arr.length).toBe(2);
    });

    test('must work correctly with empty array', () => {
      const arr = new MyArray();

      expect(arr.pop()).toBeUndefined();
    });

    test('if Array is empty, length has to be always 0, even we call pop several time', () => {
      const arr = new MyArray();
      const initialLength = arr.length;
      let finalLength;

      arr.pop();
      arr.pop();
      finalLength = arr.length;

      expect(initialLength).toBe(0);
      expect(finalLength).toBe(0);

    });

    test('Should mutate initial array, but not return new one', () => {
      const arr = new MyArray(1,4,0);
      const newArr = arr;
      const deleted = arr.pop();

      expect(newArr === arr).toBeTruthy();
      expect(deleted instanceof MyArray).toBeFalsy();
    });

  });

});