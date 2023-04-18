import Footer from '../components/UI/Footer';
import MainHeader from '../components/UI/MainHeader';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen">
      <MainHeader />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
