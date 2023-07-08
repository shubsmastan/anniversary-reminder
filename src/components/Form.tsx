import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [birtdayDate, setBirtdayDate] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    // console.log(value);
  };

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirtdayDate(e.target.value);
  };

  return (
    <>
      <form>
        <p>What's their name? </p>
        <input
          className="border-2 border-black rounded-md"
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
        />

        <p>When their birthDay?</p>
        <input
          className="border-2 border-black rounded-md"
          type="date"
          id="dateInput"
          value="{birtdayDate}"
          onChange={onInput}></input>
      </form>
    </>
  );
};

export default Form;
