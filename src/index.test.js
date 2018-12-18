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
  describe('tests for method filter', () => {
    test('instance has method filter', () => {
      const arr = new MyArray(1,4,0);
      const testArr = [];
      expect(arr.filter).toBeInstanceOf(Function);
    });
    test('instance has not Own Property filter', () => {
      const arr = new MyArray(1,4,0);
      const testArr = [];
      expect(arr.hasOwnProperty('filter')).toBeFalsy();
    });
    test('return value of no filter matches, returns empty array', () => {
      const arr = new MyArray(1,3,4);
      expect(arr.filter(item=>item==0)).toHaveLength(0);
    });
    test('expect callback args to be equal 3', () => {
      var arr = new MyArray(12, 5, 8, 130, 44);
      function isBigEnough(value) {
        return value >= 10;
      }
      var filtered = arr.filter(isBigEnough);
      expect(filtered.length).toBe(3);
    });

    test('method does not mutate initial array', () => {
      var arr = new Array(12, 5, 8, 130, 44);
      var cont = String(arr);
      function isBigEnough(value) {
        return value >= 0;
      }
      arr.filter(isBigEnough);
      var cont1 = String(arr);
      expect(cont1 == cont).toBeTruthy();
    });

    test('method must return new Array of current elements which are in check condition', () => {
      var arr = new Array(1,4,4,5,0,0);
      var filtered = arr.filter((val) => {return val >=4 } );
      expect(String(filtered)).toBe(String([4,4,5].join(',')));
    });


  });


});