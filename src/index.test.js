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

  describe('tests for method sort', () => {

    test('instance has method sort', () => {
      const arr = new MyArray(1,4,0);
      expect(arr.sort).toBeInstanceOf(Function);
    });

    test('arr has own property sort', () => {
      const arr = new MyArray(1,4,0);
      expect(arr.hasOwnProperty('sort')).toBeFalsy();
   });
    /*test('erorr if comparator is not a function or undefined', () => {
      const arr = new MyArray(1,4,0);
      let comparator = function(a,b){
        return a-b;
      }

      expect(comparator).toBeInstanceOf(Function);
   });*/

   test('should work correctly with comparator', () => {
      const arr = new MyArray(1,4,0);
      let comparator = function(a,b){
        return a-b;
      }


      expect(arr.sort(comparator)).toEqual([0,1,4]);
   });

  });

});

