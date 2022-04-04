// Polyfill "window.fetch" used in the React component.
import 'whatwg-fetch';

import { server } from './msw/server';
import { handlers, mockDataInit } from './msw/handlers/init';
import { cleanup } from '@testing-library/react';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  cleanup();
  server.resetHandlers();
  mockDataInit();
});

afterAll(() => {
  server.close();
});

HTMLCanvasElement.prototype.getContext = () => {
  // contextエラー解消用
};
