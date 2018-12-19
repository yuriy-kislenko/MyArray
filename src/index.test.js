import MyArray from "./index";

describe("Class MyArray", () => {
  describe("tests for method map", () => {
    test("if custom context doesn't provided, use current context", () => {
      const arr = new MyArray(1, 4, 0);
      const testArr = [];
      const user = {
        name: "ivan",
        testForEach() {
          arr.forEach(() => testArr.push(this.name));
        }
      };
      user.testForEach();
      expect(testArr.toString()).toBe("ivan,ivan,ivan");
    });
  });
  describe("tests for method filter", () => {
    test("instance has method filter", () => {
      const arr = new MyArray(1, 4, 0);
      expect(arr.filter).toBeInstanceOf(Function);
    });

    test("instance has not Own Property filter", () => {
      const arr = new MyArray(1, 4, 0);
      expect(arr.hasOwnProperty("filter")).toBeFalsy();
    });

    test("return value of no filter matches, returns empty array", () => {
      const arr = new MyArray(1, 3, 4);
      expect(arr.filter(item => item === 0)).toHaveLength(0);
    });

    test("expect callback args to be equal 3", () => {
      let lengthOfArguments;
      function callback(x) {
        lengthOfArguments = arguments.length;
        return x + 10;
      }
      new MyArray(1, 10, 20).filter(callback);
      expect(lengthOfArguments).toBe(3);
    });

    test("method does not mutate initial array", () => {
      const arr = new MyArray(5, 4, 3);
      arr.filter(num => num > 0);
      expect(arr).toEqual(new MyArray(5, 4, 3));
    });

    test("method must return new Array of current elements which are in check condition", () => {
      let arr = new Array(1, 4, 4, 5, 0, 0);
      let filtered = arr.filter(val => {
        return val >= 4;
      });
      expect(filtered).toEqual([4, 4, 5]);
    });

    test("callback has to be a function", () => {
      let isCallback = false;
      let callback = x => {
        isCallback = true;
        return x + 1;
      };
      const arr = new MyArray(1, 10, 20).filter(callback);
      expect(isCallback).toBe(true);
    });

    test("returns an empty array when called on empty array", () => {
      let arr = new Array();
      let filtered = arr.filter(val => {
        return val >= 4;
      });
      expect(filtered).toEqual([]);
    });

    test("if callback return false filter return empty array", () => {
      let arr = new Array(1, 2, 4);
      let filtered = arr.filter(val => {
        return val <= 0;
      });
      expect(filtered).toEqual([]);
    });

    test("if custom context does not provided, use current context", () => {
      const arr = new MyArray(1, 4, 0);
      const testArr = [];
      const user = {
        name: "ivan",
        testForEach() {
          arr.forEach(() => testArr.push(this.name));
        }
      };
      user.testForEach();
      expect(testArr).toEqual(['ivan', 'ivan', 'ivan']);
    });

    test("thisArg is set as -this- of callbackFunction properly for filter method", () => {
      let arr = new Array(2, 6, 10, 12, 16);
      let checkNumericRange = function(value) {
        if (typeof value !== "number") return false;
        else return value >= this.minimum && value <= this.maximum;
      };
      let thisArg = { minimum: 10, maximum: 20 };
      let result = arr.filter(checkNumericRange, thisArg);
      expect(result).toEqual([10, 12, 16]);
    });
  });
});
