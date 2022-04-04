import { rest } from 'msw';

export let testMock = [
  {
    id: '1',
    name: '買い物リスト',
  },
];

export const testMockInit = () => {
  testMock = [
    {
      id: '1',
      name: '買い物リスト',
    },
  ];
};

const getTestHandler = rest.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`, (_, res, ctx) => {
  return res(ctx.status(200), ctx.json(testMock));
});

export const handlers = [getTestHandler];
