// wrapper component to make whatever is rendered minimum full screen

const BodyWrapper = (props) => {
  return <div style={{ minHeight: "100vh" }}>{props.children}</div>;
};

export default BodyWrapper;
