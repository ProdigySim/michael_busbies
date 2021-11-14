import { TopNav } from '../components/nav/TopNav';
import '../css/main.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopNav />
      <div id='page-content'>
        <Component {...pageProps} />
      </div>
    </>
  );
}
  