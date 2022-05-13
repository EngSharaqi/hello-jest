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
            expect(myArr).toContain(9);
        });

        it('not.toContain', () => {
            expect(myArr).not.toContain(0);
        });
    });

});