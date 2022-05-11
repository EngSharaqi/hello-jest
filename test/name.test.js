const username = require('../functions/name');

describe('all', () => {
    test('if user entered nothing', () =>{
        expect(username()).toBe('UnKnown');
    });

    test('if user entered 1 before name', () =>{
        expect(username('1Mohamed')).toBe('Mohamed');
    });

    it('if user entered underscore in the begging or ending of index', () =>{
        expect(username('_Mohamed_')).toBe('Mohamed');
    });

    it('if user entered space in the begging or ending of index', () =>{
        expect(username(' Mohamed ')).toBe('Mohamed');
    });
});