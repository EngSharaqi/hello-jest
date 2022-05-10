const say = require('../functions/say');

test('Say hello jest', () => {
    expect(say()).toBe('Hello Jest');
});
