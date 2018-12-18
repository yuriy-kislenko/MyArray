import MyArray from './index';

describe('Class MyArray', () => {
  describe('tests for push method', () => {
    test('instance should have method push', () => {
       const arr = new MyArray(1,2,3);
      expect(new MyArray().push).toBeInstanceOf(Function);
    });
  });
/*   describe('tests for method map', () => {

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

  }); */


});