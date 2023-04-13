import { useEffect, useState } from "react";

const Footer = () => {
  return (
    <footer className={`h-20 w-full bg-zinc-950 `}>
      <section
        className={`  flex items-center pt-2 justify-evenly border-t-2  border-black`}
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
