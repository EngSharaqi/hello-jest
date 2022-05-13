const myArr = require('../functions/matchers');

describe('Matchers', () => {

    describe('check the array length', () => {
        it('native way by: length', () => {
            expect(myArr.length).toBe(9)
        });
    
        it('toHaveLength: matchers way', () => {
            expect(myArr).toHaveLength(9);
        });

        it('toHaveLength: matchers way', () => {
            expect(myArr).not.toHaveLength(10);
        });
    });
    
    describe('toContain - not.toContain: check if the array contains something', () => {
        it('matchers way by: toContain', () => {
            expect(myArr).toContain(8);
        });

        it('not.toContain', () => {
            expect(myArr).not.toContain(0);
        });
    });

    describe('toBeFalsy: check if its false', () => {
        it('if its false it will work', () => {
            expect(isNaN(myArr[1])).toBeFalsy();
        });

        it('not: if its true it will work', () => {
            expect(isNaN(myArr[9])).not.toBeFalsy();
        });
    });

    describe('toBeTruthy: check if its true', () => {
        it('if its true it will work', () => {
            expect(isNaN(myArr[9])).toBeTruthy();
        });

        it('not: if its false it will work', () => {
            expect(isNaN(myArr[8])).not.toBeTruthy();
        });
    });
});