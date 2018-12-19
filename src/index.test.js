import MyArray from './index';

describe('Class MyArray', () => {

    describe('tests for method map', () => {

        let arr;

        beforeEach(() => {
            arr = new MyArray(1, 2, 3, 4, 5, 6, 7);
        });

        test("instance has method slice", () => {
            expect(arr.slice).toBeInstanceOf(Function);
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