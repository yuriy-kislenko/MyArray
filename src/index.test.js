import MyArray from './index';

describe('Class MyArray', () => {

    describe('tests for method slice', () => {

        let arr;

        beforeEach(() => {
            arr = new MyArray(1, 2, 3, 4, 5, 6, 7);
        });

        test("instance has method slice", () => {
            expect(arr.slice).toBeInstanceOf(Function);
        });

        test("instance has not Own Property slice", () => {
            expect(arr.hasOwnProperty('slice')).toBeFalsy();
        });

        test("method must return new array", () => {
            let initialArray = arr;
            expect(arr.slice()).not.toBe(initialArray);
            expect(arr.slice().toString()).toBe(initialArray.toString());
        });

        test("new array must be an instance of My Array", () => {
            expect(arr.slice()).toBeInstanceOf(MyArray);
        });

        test("method can include 0, 1 or 2 arguments", () => {
            expect(arr.slice().toString()).toEqual('1,2,3,4,5,6,7');
            expect(arr.slice(1).toString()).toEqual('2,3,4,5,6,7');
            expect(arr.slice(1,2).toString()).toEqual('2');
        });
    });



















    // describe('tests for method map', () => {

    //     test("should mutate initial array, but not return new one", () => {
    //         const arr = new MyArray(1, 2, 3, 4); 
    //         const secondArr = arr;
    //         secondArr.push(5);
    //         expect(secondArr).toBe(arr);
    //     });

    // });
});