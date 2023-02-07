const Footer = ({ backgroundColor = "white", secondaryColor = "black" }) => {
  return (
    <footer className={`h-20 w-full bg-${backgroundColor} `}>
      <section
        className={` text-${secondaryColor} flex items-center pt-2 justify-evenly border-t-2  border-${secondaryColor}`}
      >
        <div>
          <h1>SUPPORT</h1>
          <ul>
            <li>filler</li>
            <li>filler</li>
            <li>filler</li>
          </ul>
        </div>
        <div>
          <h1>CONTACT</h1>
          <ul>
            <a href="#">Email</a>
            <p>555-555-5555</p>
          </ul>
        </div>
        <h1>MIDDLE GROUND</h1>
      </section>
    </footer>
  );
};

export default Footer;
