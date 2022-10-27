import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["footer-wrapper"]}>
      <section className={styles["footer-section-1"]}>
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
