const sum = require('../functions/sum');

// test === it

it('enter no numbers - expected returns 0', () => {
    expect(sum()).toBe(0);
});

it('enter the first number only', () => {
    expect(sum(10)).toBe(10);
});

it('enter the first and second numbers only', () => {
    expect(sum(10, 10)).toBe(20);
});
