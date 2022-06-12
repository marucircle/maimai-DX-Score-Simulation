import { AppProps } from 'next/app';
import { ModalProvider } from '../hooks/useModal';
import 'ress';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </>
  );
}
