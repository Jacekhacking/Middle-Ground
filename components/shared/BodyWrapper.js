import styles from "../styles/BodyWrapper.module.css";

// wrapper component to make whatever is rendered minimum full screen

const BodyWrapper = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default BodyWrapper;
