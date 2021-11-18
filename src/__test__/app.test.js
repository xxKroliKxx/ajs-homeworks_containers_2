import ErrorRepository from '../js/error-repository';

const e = new ErrorRepository();

test('error 200', () => {
  expect(e.translate(200)).toBe('OK');
});

test('error not found', () => {
  expect(e.translate(501)).toBe('Unknown error');
});
