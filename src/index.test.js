import MyArray from "./index";

describe("Class MyArray", () => {
  describe("tests for method FROM", () => {
    test("Class has static method FROM", () => {
      expect(MyArray.from).toBeInstanceOf(Function);
    });

    test("Instance has not Own Property FROM", () => {
      const arr = new MyArray(1, 4, 0);
      expect(MyArray.hasOwnProperty("from")).toBeTruthy();
      expect(arr.hasOwnProperty("from")).toBeFalsy();
    });

    test("If custom context is provided, use provided context", () => {
      const objectAside = { 0: 2 };
      const arr = MyArray.from(
        [10, 20, 30],
        function(x) {
          return x + this[0];
        },
        objectAside
      );
      expect(arr[0]).toBe(12);
      expect(arr[1]).toBe(22);
      expect(arr[2]).toBe(32);
    });

    test("Method FROM must return new instance of MyArray with current elements", () => {
      const arr = MyArray.from([10, 20, 30]);
      const arrControl = { 0: 10, 1: 20, 2: 30 };
      expect(arr).toBeInstanceOf(MyArray);
      expect(arr).toEqual(arrControl);
    });

    test("Method FROM can include 1, 2 or 3 arguments", () => {
      const arr1 = MyArray.from([10, 20, 30]);

      const arr2 = MyArray.from([10, 20, 30], function(x) {
        return x + 1;
      });

      const objectAside = { 0: 2 };
      const arr3 = MyArray.from(
        [10, 20, 30],
        function(x) {
          return this[0] + x;
        },
        objectAside
      );

      expect(arr1[0]).toBe(10);
      expect(arr1[1]).toBe(20);
      expect(arr1[2]).toBe(30);
      expect(arr2[0]).toBe(11);
      expect(arr2[1]).toBe(21);
      expect(arr2[2]).toBe(31);
      expect(arr3[0]).toBe(12);
      expect(arr3[1]).toBe(22);
      expect(arr3[2]).toBe(32);
    });

    test("Elements' order in 'a' should be the same as in arrayLike", () => {
      const baseArr = [1, 2, 3];
      const arrayLine = MyArray.from(baseArr);

      expect(baseArr[0]).toBe(arrayLine[0]);
      expect(baseArr[1]).toBe(arrayLine[1]);
      expect(baseArr[2]).toBe(arrayLine[2]);
    });
  });
});
