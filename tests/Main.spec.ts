import App from '../src/Main';

const main = new App();

test('should return true', () => {
    expect(main.run()).toEqual(true);
});
