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
  describe('tests for method filter', () => {
    test('instance has method filter', () => {
      const arr = new MyArray(1,4,0);
      const testArr = [];
      expect(arr.filter).toBeInstanceOf(Function);
    });
    test('instance has not Own Property filter', () => {
      const arr = new MyArray(1,4,0);
      const testArr = [];
      expect(arr.hasOwnProperty('filter')).toBeFalsy();
    });
    test('return value of no filter matches, returns empty array', () => {
      const arr = new MyArray(1,3,4);
       arr.filter(num=> num == 0)
      expect()
    });
    

  });


});