import { setupServer, SetupServerApi } from 'msw/node';
import { handlersBandle as handlers } from './handlers/handlersBandle';

export * from 'msw';

export const server: SetupServerApi = setupServer(...handlers);
