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
      const arr = new MyArray(1,4,0);
      expect(arr.sort).toBeInstanceOf(Function);
    });

    test('arr has not own property sort', () => {
      const arr = new MyArray(1,4,0);
      expect(arr.hasOwnProperty('sort')).toBeFalsy();
   });

    //point me the place where you testing comparator of method sort

   /* test('error if comparator is not a function or not undefined', () => {

      let isComparator = false;
      let undefComparator = false;
      let z;

      // let comparator = function(a,b){
      //   isComparator = true;
      //   return a-b;
      // };
      let comparator = 1;
      // if(z == undefined){

      //   undefComparator = true;
      // }
      console.log(MyArray(1,4,0).sort(comparator))
      expect(MyArray(1,4,0).sort(comparator)).toThrow(TypeError);
      // const arr2 = new MyArray(1,4,0).sort(z);

      // expect(undefComparator).toBe(true);
      // expect(isComparator).toBe(true);


      // try{
      //   expect(comparator).toBeInstanceOf(Function);

      // }catch(e){
      //   console.log('ERROR IS '+ e);
      //   //expect(e).toBe(TypeError);

      // }


   });*/


   test('should work correctly with comparator', () => {

      const arr = new MyArray(1,4,0);
      let comparator = function(a,b){
        return a-b;
      }
      expect(arr.sort(comparator)).toEqual([0,1,4]);
   });

   test('comparator must accepts two arguments', () => {
   
     let comparatorLength;
     const arr = new MyArray(4,0).sort(comparator);

      function comparator(a,b){
        comparatorLength = arguments.length;
        return a-b;
      }
      expect(comparatorLength).toEqual(2);
   });

   //add more...try 1,2,11,22

   test('should work correctly without comparator', () => {

      const arr = new MyArray("b","c","a");
      const arr2 = new MyArray(1,2,11 ,12);
      expect(arr.sort()).toEqual(["a","b","c"]);
      expect(arr2.sort()).toEqual([1,11,12,2]);
   });

   //it is not clear, by default we work with data as string

   test('lowest element shoud be at the begining of array', () => {

      const arr = new MyArray("h","d","m");
      arr.sort();
      expect(arr[0]).toEqual("d");
   });

   //add more assertions

   test('undefined shoud be at the end of array', () => {

      const arr1 = new MyArray(undefined, 3,undefined,2,undefined,1);
      const arr2 = new MyArray(3,undefined,2,undefined,1);
      const arr3 = new MyArray(3,undefined,2,1);

      arr1.sort();
      arr2.sort();
      arr3.sort();
 
      expect(arr3[arr3.length-1]).toEqual(undefined);
      expect(arr2).toEqual([1,2,3,undefined,undefined]);
      expect(arr1).toEqual([1,2,3,undefined,undefined,undefined]);
   });

//use toBe or Equal
   test('arr length before using sort == arr length after using it', () => {

      const arr = new MyArray(undefined, 3,2,1);
      const arr2 = arr.sort();
      expect(arr.length).toEqual(arr2.length);
   });

   test('numbers should be sorted as strings without comparator', () => {

      const arr = new MyArray(1, 2,10,21);
      const arr2 = arr.sort();
      expect(arr2).toEqual([1,10,2,21]);
   });

      test('numbers should be sorted as numbers with comparator', () => {

      const arr1 = new MyArray(1, 10,2,21);
      const arr2 = new MyArray(3, 40,24,1);
      expect(arr1.sort((a,b)=> a - b)).toEqual([1,2,10,21]);
      expect(arr2.sort((a,b)=> b - a)).toEqual([40,24,3,1]);
   });

      test('arr should be mutated', () => {

      const arr = new MyArray(1, 2,10,21);
      arr.sort();
     
      expect(arr).toEqual([1,10,2,21]);
     });
  });
});

