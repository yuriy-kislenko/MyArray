import MyArray from './index';

describe('Class MyArray', () => {

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
//3
    test('callback must include the originalArray as third argument', () => {
    let isArrEqualOriginArr = false;
    const originArr = new MyArray(1, 4, 0);

    function callback (el, index, arr) {
      if (arr == originArr) {
        isArrEqualOriginArr = true;
      }
      return el + index;
    }
    originArr.map(callback);
    expect(isArrEqualOriginArr).toBeTruthy();
    });
// 4
    test('Method map must return an Array', () => {
      const arr = new MyArray(1, 4, 0);
      expect(arr.map((num) => num + 5)).toBeInstanceOf(MyArray);
    });
//5
    test('should use callback at each element of array', () => {
      const arr = new MyArray(5, 4, 3);
      expect(arr.map((num) => num + 1)).toEqual(new MyArray(6, 5, 4));
    });
//6 
    test("method map shouldn't mutate initial array", () => {
      const arr = new MyArray(5, 4, 3);
      arr.map((num) => num + 1);

      expect(arr).toEqual(new MyArray(5, 4, 3));
    });
//7
    test('returns an empty array when called on empty array', () => {
    const arr = new MyArray();
    expect(arr.map((num) => num + 1)).toEqual(new MyArray());
    expect(arr.map((num) => num + 1).length).toEqual(new MyArray().length);
    });
// 8
    test('if custom context doesn\'t provided, use current context', () => {
    const arr = new MyArray(1, 4, 0);
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
//10
    test('expect callback args to be equal 3', () => {
    let lengthOfArguments;
    function callback (x) {
        lengthOfArguments = arguments.length;
        return x + 10;
      
    }
    new MyArray(1, 10, 20).map(callback);
    expect(lengthOfArguments).toBe(3);
    });
//11
    test('callback has to be a function', () => {
    let isCallback = false;
    let callback = (x) => {
        isCallback = true;
        return x + 1;
    }
    const arr = new MyArray(1, 10, 20).map(callback);
    expect(isCallback).toBe(true);
    });

  });
//map

});


