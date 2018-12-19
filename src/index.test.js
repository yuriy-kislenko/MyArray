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
      expect(testArr).toEqual(['ivan','ivan','ivan']);
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

  describe("tests for method reduce", () => {
    
    test("instance has method reduce", () => {
      const arr = new MyArray(1, 4, 0);
      expect(arr.reduce).toBeInstanceOf(Function);
    });
    test("instance has  Own Property reduce", () => {
      const arr = new MyArray(1, 4, 0);
      expect(arr.hasOwnProperty("reduce")).toBeFalsy();
    });
    test("Method shouldn't mutate initial array", () => {
      const arr = new MyArray(1, 2, 3);
      const mockCallback = jest.fn();
      const new1 = arr;
      arr.reduce(mockCallback);
      const new2 = arr;
      expect(new1).toEqual(new2);
    });
    test("callback has to be a function", () => {
      let callback = 1212121;
      const arr = new Array(1, 4, 4, 5, 0, 0);
      expect(()=>{arr.reduce(callback)}).toThrow();

    });
    test("If an array is empty but there is an InitialValue as a parameter", () => {
      let arr = new Array();
      const mockCallback = jest.fn();
      let thisArg = { minimum: 10, maximum: 20 };
      let result = arr.reduce(mockCallback, thisArg);
      expect(result).toEqual(thisArg);
    });
    test('initialValue is not passed', () => {
      const arr = new MyArray(1, 2);
      arr.reduce((accum, curr, i) => {
      expect(accum).toEqual(arr[0]);
      });
    });
    test('empty array and initialValue is not passed', () => {
      const arr = new MyArray();
      const callReduceOnEmptyArray = () => {
        arr.reduce(() => 0);
      };
      expect(callReduceOnEmptyArray).toThrow(TypeError);
    });
    

  });

});