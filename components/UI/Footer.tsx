const Footer = () => {
  return (
    <footer
      className={`h-24 w-screen bg-zinc-900 flex items-center justify-center `}
    >
      <section className={`flex w-screen items-center pt-2 justify-evenly `}>
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
            <a href="components/shared#">Email</a>
            <p>(385) 313-0591</p>
          </ul>
        </div>
        <h1>MIDDLE GROUND</h1>
      </section>
    </footer>
  );
};

export default Footer;
