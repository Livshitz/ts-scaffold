import App from '../src/Main';

const main = new App();

test('should return true', async (done) => {
    expect(main.run()).toEqual(true);
});
