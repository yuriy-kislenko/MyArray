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

    test("If custom context is provided, use its context", () => {
      const objectAside = Object.create({ 0: 2 });
      const arr = MyArray.from(
        [10, 20, 30],
        function(x) {
          return x + this[0];
        },
        objectAside
      );
      expect(String(arr)).toBe("12,22,32");
    });

    test("Method FROM must return new instance of MyArray of current elements", () => {
      const arr = MyArray.from([10, 20, 30]);
      expect(arr).toBeInstanceOf(MyArray);
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

      expect(String(arr1)).toBe("10,20,30");
      expect(String(arr2)).toBe("11,21,31");
      expect(String(arr3)).toBe("12,22,32");
    });

    test("Elements' order in 'a' should be the same as in arrayLike", () => {
      const arr = [1, 2, 3];
      const arr1 = Array.from(arr);

      expect(String(arr) === String(arr1)).toBeTruthy();
    });
  });
});
