import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Home from '../pages/index';

// const sleep = (value: number) =>
//   new Promise((resolve) => setTimeout(resolve, value));

// type TestContextType = {
//   children: ReactNode;
// };

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: jest.fn(String),
    };
  },
}));

afterEach(cleanup);

describe('導入テスト', () => {
  it('表示される？', async () => {
    const { findByText } = render(<Home />);
    expect(await findByText('indexページ')).toBeTruthy();
  });
});
