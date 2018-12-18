import MyArray from './index';

describe('Class MyArray', () => {

  describe('Test method forEach of class Array', () => {

    test('has method forEach ', () => {
        const arr = new MyArray();
        expect(arr.forEach).toBeInstanceOf(Function);
    });

    test('instance has not Own Property forEach ', () => {
      const arr = new MyArray();
      expect(arr.hasOwnProperty('forEach')).toBeFalsy();
    });
    
    test('does not mutate initial arr if we do nothing inside the cb ', () => {
      const arr = new MyArray(1,4,0);
      arr.forEach(a => a);
      expect(arr.toString()).toBe('1,4,0')
    });

    test('if custom context doesnt provided, use current context ', () => {
      const arr = new MyArray(1,4,0);
      const testArr = [];
      const user = {
        name: 'ivan',
        testForEach () {
      arr.forEach(function() {testArr.push(this.name)});
          }
        }
      user.testForEach()
      expect(testArr.toString()).toBe('ivan,ivan,ivan')
    });

    test('callback is executed once for each element in the array ', () => {
      const arr = new MyArray(10);
      const mockCallback = jest.fn(x => 42 + x);
      arr.forEach(mockCallback);
      expect(mockCallback.mock.calls.length).toBe(10);
    });
  

})



});