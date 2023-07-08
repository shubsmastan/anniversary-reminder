import React, { useState } from "react";
import Button from "./Button";

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
      <form className="p-5">
        <p>What's their name? </p>
        <input
          className="border-2 border-black rounded-md mb-4"
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

        <Button
          text="submit"
          handleClick={() => {
            console.log("TypeScript is annoying");
          }}
        />
      </form>
    </>
  );
};

export default Form;
