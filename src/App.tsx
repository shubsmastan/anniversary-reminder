import Counter from "./components/Counter";

const App = () => {
  const birthdate = "1988-02-02"; // Replace with the actual birthdate

  return (
    <div>
      <h1>Birthday Countdown</h1>
      <Counter birthdate={birthdate} />
    </div>
  );
};

export default App;
