import getLevel from '../user';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('return level 1', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: '1',
  });
  const result = 'Ваш текущий уровень: 1';
  const response = getLevel(1);
  expect(response).toBe(result);
  expect(fetchData).toBeCalledTimes(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('return error', () => {
  fetchData.mockReturnValue({
    status: 'not ok',
    level: '1',
  });
  const result = 'Информация об уровне временно недоступна';
  const response = getLevel(1);
  expect(response).toEqual(result);
});
