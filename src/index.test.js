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
      expect(arr[3] === undefined && deleted == 0).toBeTruthy();
    });

  });

});