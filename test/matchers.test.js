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

    describe('greater than, less than, greater than or equal to, less than or equal to', () => {
        it('toBeGreaterThan: if its > 1, it will be true', () => {
            expect(myArr[5]).toBeGreaterThan(1);
        });

        it('toBeLessThan: if its < 10, it will be true', () => {
            expect(myArr[5]).toBeLessThan(10);
        });

        it('toBeGreaterThanOrEqual: if its >= 6, it will be true', () => {
            expect(myArr[5]).toBeGreaterThanOrEqual(6);
        });

        it('toBeLessThanOrEqual: if its <= 6, it will be true', () => {
            expect(myArr[5]).toBeGreaterThanOrEqual(6);
        });
    });

    describe('toBeUndefined: if its undefined it will work', () => {
        it('undefined', () => {
            let a;
            expect(a).toBeUndefined();
        });
    });

    describe('Object methodes: toHaveProperty :', () => {
        it('you can check with property only or property and value', () => {
            let a = {
                name: 'Mohamed Sharaqi',
                Age: 24
            };
            expect(a).toHaveProperty('name');
            expect(a).toHaveProperty('name', 'Mohamed Sharaqi');
        });
    });

    describe('Object toMatch', () => {
        it('you can check with property only or property and value', () => {
            let a = 'Mohamed Sharaqi';
            expect(a).toMatch(/Sharaqi/);
        });
    });
});