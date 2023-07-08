const Button = () => {
  const buttonClicked = () => {
    console.log("button clicked");
  };
  return (
    <div>
      <button className="primaryButton" onClick={buttonClicked}> Click me</button>
    </div>
  );
};

export default Button;
