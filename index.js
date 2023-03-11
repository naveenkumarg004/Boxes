const Box = (props) => {
  //  Write your code here.
  const { styling, text } = props;
  return (
    <div className={styling}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg">
    <h1>Boxes</h1>
    <div className="box-cont">
      <Box styling="box-s" text="Small" />
      <Box styling="box-m" text="Medium" />
      <Box styling="box-l" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
