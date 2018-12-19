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
//5
    test('should use callback at each element of array', () => {
      const mockCallback = jest.fn(num => num * 10);
      const arr = new MyArray(5, 4, 3);
      arr.map(mockCallback);

      expect(mockCallback.mock.results[0].value).toBe(50);
      expect(mockCallback.mock.results[1].value).toBe(40);
      expect(mockCallback.mock.results[2].value).toBe(30);
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
    const testArr = new MyArray();
    const user = {
    name: 'ivan',
     testMap () {
      arr.map(() => testArr.push(this.name));
     }
    }
    user.testMap();
    expect(testArr).toEqual(new MyArray('ivan', 'ivan', 'ivan'));
    });

//9
    test('thisArg is set as "this" of mapFunction properly for map method', () => {
    let thisEqualAnother = false;
    const originArr = new Array(1, 4, 0);
    const anotherArr = new Array(3, 3, 3);
      
    function callback (item) {
        thisEqualAnother = (this == anotherArr);
        return item + 10;
    }
    originArr.map(callback, anotherArr);
    expect(thisEqualAnother).toBeTruthy();
    });
//10
    test('expect  callbacks args length to be equal 3', () => {
        const mockCallback = jest.fn();
        const arr = new MyArray(1, 2, 3);
        arr.map(mockCallback);
        expect(mockCallback.mock.calls.length).toBe(3);
    });
//11
    test('callback has to be a function', () => {
        const callback = "";
        const arr = new MyArray(1, 2, 3); 

        expect(() => {arr.map(callback)}).toThrow();
        
    });
  });
//map

});


