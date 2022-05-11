const sum = require('../functions/sum');

// test === it
describe('Hole module', () => {
    describe('if entered one nubmer or null', () =>{
        it('enter no numbers - expected returns 0', () => {
            expect(sum()).toBe(0);
        });
        
        it('enter the first number only', () => {
            expect(sum(10)).toBe(10);
        });
    });

    describe('if entered more than one number', () =>{
        it('enter the first and second numbers only', () => {
            expect(sum(10, 10)).toBe(20);
        });        
    });
});
