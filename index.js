const Box = (props) => {
  const { className, text } = props;
  return (
    <div className={`box ${className}`}>
      <p class="box-title">{text}</p>
    </div>
  );
};

const element = (
  <div class="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box className="box-1" text="Small" />
      <Box className="box-2" text="Medium" />
      <Box className="box-3" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
