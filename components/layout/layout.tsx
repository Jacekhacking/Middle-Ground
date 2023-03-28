import MainHeader from "./main-header";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <MainHeader />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
