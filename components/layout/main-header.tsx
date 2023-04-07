import Navbar from "./navigation/Navbar";

const MobileNav = () => {
  return (
    <div className="sm:block md:none  bg-zinc-200 text-black h-10">filler</div>
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
