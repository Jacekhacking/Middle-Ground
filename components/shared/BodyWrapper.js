// wrapper component to make whatever is rendered minimum full screen

const BodyWrapper = (props) => {
  return <div className="min-h-screen -mt-20">{props.children}</div>;
};

export default BodyWrapper;
