// wrapper component to make whatever is rendered minimum full screen

const BodyWrapper = (props) => {
  return <div className="min-h-screen">{props.children}</div>;
};

export default BodyWrapper;
