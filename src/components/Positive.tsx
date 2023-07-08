import Form from "./Form";

const Positive = () => {
  return (
    <div className="flex flex-col text-center gap-3 justify-center items-center">
      <div>
        <h1 className="text-2xl">So you are married!</h1>
        <p>In that case, better remember all the important dates!</p>
      </div>
      <Form />
    </div>
  );
};

export default Positive;
