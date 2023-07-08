import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-pink-300">Hello from marisi!</div>
    </>
  );
}

export default App;
