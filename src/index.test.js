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


