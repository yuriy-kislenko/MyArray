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
      const arr = new MyArray(1, 4, 0);
      expect(arr.sort).toBeInstanceOf(Function);
    });

    test('arr has not own property sort', () => {
      const arr = new MyArray(1, 4, 0);
      expect(arr.hasOwnProperty('sort')).toBeFalsy();
    });

    test('Throw error if comparator is not a function or undefined', () => {
      let arr1 = new MyArray(1, 2, 3);
      let comparator = 1;

      expect(()=>arr1.sort(comparator)).toThrow();
    });

    test('should work correctly with comparator', () => {
      const arr = new MyArray(1, 4, 0);
      const comparator = function(a, b){
        return a-b;
      }

      expect(arr.sort(comparator)).toEqual([0, 1, 4]);
    });

    test('comparator must accepts two arguments', () => {
     let comparatorLength;
     const arr = new MyArray(4, 0).sort(comparator);
     function comparator(a, b){
      comparatorLength = arguments.length;
      return a-b;
    }

    expect(comparatorLength).toEqual(2);
  });

    test('should work correctly without comparator', () => {
      const arr = new MyArray("b","c","a");
      const arr2 = new MyArray(1, 2, 11 , 12);

      expect(arr.sort()).toEqual(["a","b","c"]);
      expect(arr2.sort()).toEqual([1, 11, 12, 2]);
    });

    test('string elements should be sorted by UNICODE', () => {
      const arr = new MyArray("h","d","m");

      arr.sort();
      expect(arr[0]).toEqual("d");
    });

    test('undefined shoud be at the end of array', () => {
      const arr1 = new MyArray(undefined, 3, undefined, 2, undefined, 1);
      const arr2 = new MyArray(3, undefined, 2, undefined, 1);
      const arr3 = new MyArray(3, undefined, 2, 1);

      arr1.sort();
      arr2.sort();
      arr3.sort();

      expect(arr3[arr3.length-1]).toEqual(undefined);
      expect(arr2).toEqual([1, 2, 3, undefined, undefined]);
      expect(arr1).toEqual([1, 2, 3, undefined, undefined, undefined]);
    });

    test('arr length before using sort == arr length after using it', () => {
      const arr1 = new MyArray(3, 2, 1).length;
      const arr2 = new MyArray(3, 2, 1).sort().length;  

      expect(arr1 === arr2).toBeTruthy();
    });

    test('numbers should be sorted as strings without comparator', () => {
      const arr = new MyArray(1, 2, 10, 21);
      const arr2 = arr.sort();

      expect(arr2).toEqual([1, 10, 2, 21]);
    });

    test('numbers should be sorted as numbers with comparator', () => {
      const arr1 = new MyArray(1, 10, 2, 21);
      const arr2 = new MyArray(3, 40, 24, 1);

      expect(arr1.sort((a, b) => a - b)).toEqual([1, 2, 10, 21]);
      expect(arr2.sort((a, b) => b - a)).toEqual([40, 24, 3, 1]);
    });

    test('arr should be mutated', () => {
      const arr = new MyArray(1, 2, 10, 21);

      arr.sort();
      expect(arr).toEqual(new MyArray(1, 10, 2, 21));
    });
  });
});

