const say = require('./say');

test('Say hello jest', () => {
    expect(say()).toBe('Hello Jest');
});
