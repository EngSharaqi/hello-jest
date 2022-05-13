const onlySkip = require('../functions/onlyAndSkip');

describe('only methode', () => {
    it.only('u can wite only methode for describe or test', () =>{
        expect(onlySkip(1)).toBe(1);
    });
});

describe('skip methode', () => {
    it.skip('u can skip describe or test', () =>{
        expect(onlySkip(1)).toBe(1);
    });
});