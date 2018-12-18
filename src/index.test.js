import MyArray from './index';

describe('Class MyArray', () => {

  describe('Test method forEach of class Array', () => {

    let arr;

    beforeEach(() => {
        arr = new MyArray(1,4,0);
    });

    test('has method forEach ', () => {
        expect(arr.forEach).toBeInstanceOf(Function);
    });

    test('instance has not Own Property forEach ', () => {
      expect(arr.hasOwnProperty('forEach')).toBeFalsy();
    });
    
    test('does not mutate initial arr if we do nothing inside the cb ', () => {
      arr.forEach(a => a);
      expect(arr.toString()).toBe('1,4,0')
    });

    test('if custom context doesnt provided, use current context ', () => {
      const testArr = [];
      const user = {
        name: 'ivan',
        testForEach () {
      arr.forEach( () => {testArr.push(this.name)});
          }
        }
      user.testForEach()
      expect(testArr.toString()).toBe('ivan,ivan,ivan')
    });

    test('callback is executed once for each element in the array ', () => {
      const mockCallback = jest.fn(x => 42 + x);
      arr.forEach(mockCallback);
      expect(mockCallback.mock.calls.length).toBe(3);
    });

    test('expect callback args to be equal 3', () => {
      const mockCallback = jest.fn( (v, i, arr) => {});
      expect(mockCallback.length).toBe(3);
    });

    test('It should pass in the index of each postiion in originalArray as second argument to callback ', () => {
      const mockCallback = jest.fn( (v, i, arr) =>  i);
      arr.forEach(mockCallback);
      expect(mockCallback.mock.results[0].value).toBe(0);
    });

    test('method should return undefined ', () => {
      const mockCallback = jest.fn( (v, i, arr) =>  i);
      expect(arr.forEach(mockCallback)).toBeUndefined();
    });

    test('thisArg is set as this of callbackFunction properly for forEach method ', () => {
      const testArr = [];
      const user = {
        name: 'ivan',
        testForEach () {
        arr.forEach(function() {
          testArr.push(this.name)
          }, user2);
        }
      }
      const user2 = {
        name: 'ivan2',
      }
      user.testForEach();
      expect(testArr.toString()).toBe('ivan2,ivan2,ivan2')
    });

})

});