import MyArray from './index';

describe('Class MyArray', () => {

  describe('tests for method slice', () => {

      let arr;

      beforeEach(() => {
          arr = new MyArray(1, 2, 3, 4, 5, 6, 7);
      });

      test("instance has method slice", () => {
          expect(arr.slice).toBeInstanceOf(Function);
      });

      test("instance has not Own Property slice", () => {
          expect(arr.hasOwnProperty('slice')).toBeFalsy();
      });

      test("method must return new array", () => {
          const initialArray = arr;
          expect(arr.slice()).not.toBe(initialArray);
          expect(arr.slice()).toEqual(initialArray);
      });

      test("new array must be an instance of My Array", () => {
          expect(arr.slice()).toBeInstanceOf(MyArray);
      });

      test("method can include 0, 1 or 2 arguments", () => {
          expect(arr.slice()).toEqual(new MyArray(1,2,3,4,5,6,7));
          expect(arr.slice(1)).toEqual(new MyArray(2,3,4,5,6,7));
          expect(arr.slice(1,3)).toEqual(new MyArray(2, 3));
      });
      
      test("if index is negative start from the end", () => {
          expect(arr.slice(-3, 6)).toEqual(new MyArray(5, 6));
          expect(arr.slice(-4, -2)).toEqual(new MyArray(4, 5));
      });
      
      test("if there is 1 argument copy array to end", () => {
          expect(arr.slice(3)).toEqual(new MyArray(4,5,6,7));
      });

      test("if there is no arguments copy initial array", () => {
          expect(arr.slice()).toEqual(arr);
      });

      test("if the first element is null or undefined start from index 0", () => {
          expect(arr.slice(null, 5)).toEqual(new MyArray(1,2,3,4,5));
          expect(arr.slice(undefined, 3)).toEqual(new MyArray(1,2,3));
      });
  });

  describe('tests for method push', () => {
    let arr;
    beforeEach(() => {
      arr = new MyArray(1, 2, 3);
    });

    test('instance should have method push', () => {
      expect(arr.push).toBeInstanceOf(Function);
    });

    test('instance has not own property push', () => {
      expect(arr.hasOwnProperty('push')).toBeFalsy();
    });

    test('method returns new length', () => {
      const initialLength = arr.length;

      const expectedLength = initialLength + 3;
      const newLength = arr.push(4, 5, 6);
      expect(newLength).toBe(expectedLength);
    });

    test('method must increment current length by 1, if 1 argument is put ', () => {
      const initialLength = arr.length;
      arr.push(2);
      const expectedLength = initialLength + 1;
      expect(arr.length).toBe(expectedLength);
    });

    test("method doesn't change length, if 0 argument is put", () => {
      arr.push();
      expect(arr.length).toBe(3);
    });

    test("pushed element must be the last", () => {
      const a = 5;
      arr.push(a);
      expect(arr[3]).toBe(a);
    });

    test("should allow to add multiple items", () => {
      arr.push(4, 5, 6);
      const expectedArray = [1, 2, 3, 4, 5, 6];
      expect(arr.length).toBe(expectedArray.length);
      expect(arr[3]).toBe(4);
      expect(arr[4]).toBe(5);
      expect(arr[5]).toBe(6);
    });

    test("push 1 element to an empty array, it`s length must be 1", () => {
      arr = new MyArray();
      const newEl = 1;
      expect(arr.push(newEl)).toBe(1);
      expect(arr.length).toBe(1);
    });

    test("returns undefined if there is no such index", () => {
      arr.push(5);
      expect(arr[arr.length]).toBeUndefined();
    });
  });

  describe('tests for method map', () => {
// 1
    test('instance has method map', () => {
      const arr = new MyArray(1, 4, 0);
      expect(arr.map).toBeInstanceOf(Function);
    });
// 2
    test('instance has not Own Property map', () => {
      const arr = new MyArray(1, 4, 0);
      expect(arr.hasOwnProperty('map')).toBeFalsy();
    });
// 3
    test('callback must include the originalArray as third argument', () => {
      const mockCallback = jest.fn();
      const originArr = new MyArray(1, 4, 0);
      originArr.map(mockCallback);

      expect(mockCallback.mock.calls[0][2]).toEqual(originArr);
      expect(mockCallback.mock.calls[1][2]).toEqual(originArr);
      expect(mockCallback.mock.calls[2][2]).toEqual(originArr);
    });
// 4
    test('Method map must return an Array', () => {
      const arr = new MyArray(1, 4, 0);
      expect(arr.map((num) => num + 5)).toBeInstanceOf(MyArray);
    });
// 5
    test('should use callback at each element of array', () => {
      const mockCallback = jest.fn(num => num * 10);
      const arr = new MyArray(5, 4, 3);
      arr.map(mockCallback);

      expect(mockCallback.mock.results[0].value).toBe(50);
      expect(mockCallback.mock.results[1].value).toBe(40);
      expect(mockCallback.mock.results[2].value).toBe(30);
    });
// 6 
    test("method map shouldn't mutate initial array", () => {
      const arr = new MyArray(5, 4, 3);
      arr.map((num) => num + 1);

      expect(arr).toEqual(new MyArray(5, 4, 3));
    });
// 7
    test('returns an empty array when called on empty array', () => {
      const arr = new MyArray();
      expect(arr.map((num) => num + 1)).toEqual(new MyArray());
      expect(arr.map((num) => num + 1).length).toBe(0);
    });
// 8
    test('if custom context doesn\'t provided, use current context', () => {
      const arr = new MyArray(1, 4, 0);
      const testArr = [];
      const user = {
        name: 'ivan',
        testMap () {
          arr.map(() => testArr.push(this.name));
        }
      }
      user.testMap();
      expect(testArr).toEqual(['ivan', 'ivan', 'ivan']);
    });
// 9
    test('thisArg is set as "this" of mapFunction properly for map method', () => {
      const originArr = new MyArray(1, 4, 0);
      const customContext = { test: 10 };
        
      function callback (item) {
        return this.test;
      }

      const resultArr = originArr.map(callback, customContext);
      expect(resultArr).toEqual(new MyArray(10, 10, 10));
    });
// 10
    test('expect callbacks args length to be equal 3', () => {
      const mockCallback = jest.fn();
      const arr = new MyArray(1, 2, 3);
      arr.map(mockCallback);
      expect(mockCallback.mock.calls.length).toBe(3);
    });
// 11
    test('should throw error if callback is not a function', () => {
        const callback = "";
        const arr = new MyArray(1, 2, 3); 

        expect(() => {arr.map(callback)}).toThrow(TypeError);
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

      expect(() => arr1.sort(comparator)).toThrow();
    });

    test('should work correctly with comparator', () => {
      const comparator = jest.fn((a, b) => a - b);
      const arr = new MyArray(4, 1, 3);

      arr.sort(comparator);
      
      expect(arr).toEqual(new MyArray(1, 3, 4));
    });

    test('comparator must accepts two arguments', () => {
      const comparator = jest.fn();
      const arr = new MyArray(4, 1, 3);

      arr.sort(comparator);
      
      expect(comparator.mock.calls.length).toBe(2);
    });

    test('should work correctly without comparator', () => {
      const arr = new MyArray("b", "c", "a");
      const arr2 = new MyArray(1, 2, 11, 12);

      arr.sort();
      arr2.sort();

      expect(arr).toEqual(new MyArray("a", "b", "c"));
      expect(arr2).toEqual(new MyArray(1, 11, 12, 2));
    });

    test('string elements should be sorted by UNICODE', () => {
      const arr = new MyArray("h", "d", "m");
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

      expect(arr3[arr3.length - 1]).toEqual(undefined);
      expect(arr2).toEqual(new MyArray(1, 2, 3, undefined, undefined));
      expect(arr1).toEqual(new MyArray(1, 2, 3, undefined, undefined, undefined));
    });

    test('arr length before using sort === arr length after using it', () => {
      const { length: initialLength } = new MyArray(3, 2, 1);
      const { length: expectedLength } = new MyArray(3, 2, 1).sort();  

      expect(initialLength).toBe(expectedLength);
    });

    test('numbers should be sorted as strings without comparator', () => {
      const arr = new MyArray(1, 2, 10, 21);

      arr.sort();

      expect(arr).toEqual(new MyArray(1, 10, 2, 21));
    });

    test('numbers should be sorted as numbers with comparator', () => {
      const arr1 = new MyArray(1, 10, 2, 21);
      const arr2 = new MyArray(3, 40, 24, 1);

      expect(arr1.sort((a, b) => a - b)).toEqual(new MyArray(1, 2, 10, 21));
      expect(arr2.sort((a, b) => b - a)).toEqual(new MyArray(40, 24, 3, 1));
    });

    test('arr should be mutated', () => {
      const arr = new MyArray(1, 2, 10, 21);

      arr.sort();

      expect(arr).toEqual(new MyArray(1, 10, 2, 21));
    });
  });

  describe('tests for method pop', () => {
    let arr;

    beforeEach(() => {
      arr = new MyArray(1,4,0)
    });

    test('instance has method pop', () => {
      expect(arr.pop).toBeInstanceOf(Function);
    });

    test('instance has not Own Property pop', () => {
      expect(arr.hasOwnProperty('pop')).toBeFalsy();
    });

    test('Method must return deleted element', () => {
      expect(arr.pop()).toBe(0);
    });

    test('Method must delete last element from array', () => {
      const deleted = arr.pop();

      expect(arr[3]).toBeUndefined();
      expect(deleted).toBe(0);
    });

    test('Length of array must reduce by 1', () => {
      arr.pop();

      expect(arr.length).toBe(2);
    });

    test('must work correctly with empty array', () => {
      const arrEmpty = new MyArray();

      expect(arrEmpty.pop()).toBeUndefined();
    });

    test('Empty array length always must be 0', () => {
      const arrEmpty = new MyArray();
      const initialLength = arrEmpty.length;
      arr.pop();
      arr.pop();
      const finalLength = arrEmpty.length;

      expect(initialLength).toBe(0);
      expect(finalLength).toBe(0);

    });


  });

  describe('tests for method find', () => {
  //1
    test("returns undefined if there is no such element", () => {
      const arr = new MyArray(2,4,5);
      const callback = (x) => x > 10; 
      expect(arr.find(callback)).toBeUndefined();
    });
    
  //2  
    test('returns the first element that satisfies the expression', () => {
      const callback = (x)=> x > 1;
      const arr = new MyArray(1, 2, 3);
      expect(arr.find(callback)).toBe(2);
    });
  
  //3
    test('trhow error if callback is not a function', () => {
      const callback = "";
      const arr = new MyArray(1, 2, 3); 
      expect(() => {arr.find(callback)}).toThrow();
      
      
    });
  
  //4
    test('expect callbacks args length to be equal 3', () => {
      const callback = jest.fn();
      const arr = new MyArray(1, 2, 3);
      arr.find(callback);
      expect(callback.mock.calls.length).toBe(3);
    });
  
  //5
    test('callback must include the originalArray as third argument', () => {
      const callback = jest.fn();
      const originArr = new MyArray(1, 4, 0);
      originArr.find(callback);
  
      expect(callback.mock.calls[0][2]).toBe(originArr);
      expect(callback.mock.calls[1][2]).toBe(originArr);
      expect(callback.mock.calls[2][2]).toBe(originArr);
    });

  //6
    test('instance has not Own Property map', () => {
      const arr = new MyArray(1, 4, 0);
      expect(arr.hasOwnProperty('find')).toBeFalsy();
    });

  //7
    test('instance has method find', () => {
      const arr = new MyArray(1, 4, 0);
      expect(arr.find).toBeInstanceOf(Function);
    });
    
  });

  describe('Tests for method toString', () => {

    let arr;

    beforeEach(() => {
      arr = new MyArray(1, 2, 3, 4);
    });

    test('instance has method toString', ()=> {
      expect(arr.toString).toBeInstanceOf(Function);
    });

    test('instance has not Own Property toString', ()=> {
      expect(arr.hasOwnProperty('toString')).toBeFalsy();
    });

    test('the toString result of empty arr must be an empty string and not undefined', ()=> {
      arr = new MyArray(0);
      expect(arr.toString()).toBe('');
      expect(arr.toString()).not.toBeUndefined();
    });

    test('method has to return a string', ()=> {
      const str = arr.toString();
      expect(typeof str).toBe('string');
    });

    test('returns a comma separated list of elements', ()=> {
      expect(arr.toString()).toBe('1,2,3,4');
    });

  });
});