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

   test('comparator should return "-","+""0', () => {

      const arr = new MyArray(4,0);
      const arr2 = new MyArray(4,4);

      let comparator1 = function(a,b){
        return a>b;
      }
      let comparator2 = function(a,b){
        return a<b;
      }

      let comparator3 = function(a,b){
        return a==b;
      }

      expect(comparator1.length).toEqual(2);
      expect(comparator1(arr[0],arr[1])).toEqual(true);
      expect(comparator2(arr[0],arr[1])).toEqual(false);
      expect(comparator3(arr2[0],arr2[1])).toEqual(true);

   });

   test('should work correctly without comparator', () => {
      const arr = new MyArray("b","c","a");
 
      expect(arr.sort()).toEqual(["a","b","c"]);
   });

   test('lowest element shoud be at the begining of array', () => {

      const arr = new MyArray(3,2,1);
      arr.sort();
 
      expect(arr[0]).toEqual(1);
   });





  });

});

