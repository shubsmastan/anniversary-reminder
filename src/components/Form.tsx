import React, { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { setName as setStoreName, setKeyDates, setScreenMode } from "../store/mainSlice";

const Form = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [birtdayDate, setBirtdayDate] = useState("");
  const [weddingDate, setWeddingDate] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    // console.log(value);
  };

  const onDInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirtdayDate(e.target.value);
  };

  const onWInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeddingDate(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setStoreName(name));
    dispatch(
      setKeyDates({
        birthDate: birtdayDate,
        weddingDate: weddingDate,
      })
    );
    dispatch(setScreenMode(3));
    // alert("hey");
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

        <p>When their birth day?</p>
        <input
          className="border-2 border-black rounded-md"
          type="date"
          id="bDateInput"
          value={birtdayDate}
          onChange={onDInput}
        ></input>

        <p>When your wedding day?</p>
        <input
          className="border-2 border-black rounded-md"
          type="date"
          id="wDateInput"
          value={weddingDate}
          onChange={onWInput}
        ></input>

        <Button text="submit" handleClick={handleSubmit}  />
      </form>
    </>
  );
};

export default Form;
