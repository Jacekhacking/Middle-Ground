import Navbar from "./navigation/Navbar";

const MobileNav = () => {
  return (
    <div className="md:block lg:hidden  bg-zinc-200 text-black h-10">
      filler
    </div>
  );
};

const MainHeader = () => {
  return (
    <div>
      <Navbar />
      <MobileNav />
    </div>
  );
};
export default MainHeader;
