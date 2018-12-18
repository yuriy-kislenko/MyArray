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
  });
});
