const Button = () => {
  const buttonClicked = () => {
    console.log("button clicked");
  };
  return (
    <div>
      <button onClick={buttonClicked}> Click me</button>
    </div>
  );
};

export default Button;
