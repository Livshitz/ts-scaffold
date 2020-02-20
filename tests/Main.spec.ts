import { Main } from '../src/Main';

const main = new Main();

test('should return true', () => {
    expect(main.run()).toEqual(true);
});
  