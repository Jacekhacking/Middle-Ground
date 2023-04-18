// import "../components/styles/globals.css";
// import Layout from "../components/layout/PageLayout";
import Footer from "../components/layout/Footer";
import MainHeader from "../components/layout/MainHeader";
import "../styles/globals.css";

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
