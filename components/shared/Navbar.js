import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div>Logo</div>
      <ul>
        <li>Home</li>
        <li>Treatment</li>
        <li>Training</li>
        <li>Blog</li>
      </ul>
    </div>
  );
};

export default Navbar;
