import MyArray from './index';

describe('Class MyArray', () => {

  describe('Tests for method toString', () => {

    let arr;

    beforeEach(() => {
      arr = new MyArray(1, 2, 3, 4);
    });

    test('instance has method toString', ()=> {
      expect(arr.toString).toBeInstanceOf(Function);
    });

})



});