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
      expect(arr.length).toBe(5)
    });
    test("method doesn't change length, if 0 argument is put", () => {
      const arr = new MyArray(1, 2, 3, 4);
      arr.push();
      expect(arr.length).toBe(4)
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