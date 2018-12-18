import MyArr from "./index";

describe("Class MyArray", () => {
  // describe('tests for method map', () => {

  //   test('if custom context doesn\'t provided, use current context', () => {
  //     const arr = new MyArray(1,4,0);
  //     const testArr = [];
  //     const user = {
  //       name: 'ivan',
  //       testForEach () {
  //         arr.forEach(() => testArr.push(this.name));
  //       }
  //     }
  //     user.testForEach()
  //     expect(testArr.toString()).toBe('ivan,ivan,ivan');
  //   });

  // });

  describe("tests for method FROM", () => {
    test("Class has static method FROM", () => {
      expect(MyArr.from).toBeInstanceOf(Function);
    });

    test("Instance has not Own Property FROM", () => {
      const arr = new MyArr(1, 4, 0);
      expect(arr.hasOwnProperty("from")).toBeFalsy();
    });

    test("If custom context is provided, use its context", () => {
      const objectAside = Object.create({ 0: 2 });
      const arr = MyArr.from(
        [10, 20, 30],
        function(x) {
          return x + this[0];
        },
        objectAside
      );
      expect(String(arr)).toBe("12,22,32");
    });

    test("Method FROM must return new instance of MyArr of current elements", () => {
      const arr = MyArr.from([10, 20, 30]);
      expect(arr).toBeInstanceOf(MyArr);
    });

    test("If custom context isn't provided, use current context", () => {
      const x = 50;
      const arr = Array.from([10, 20, 30], function(x) {
        return this.x;
      });
      expect(String(arr)).toBe("10,20,30");
    });
  });
});
