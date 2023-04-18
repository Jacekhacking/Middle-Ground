import MainHeader from "./MainHeader";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <MainHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
