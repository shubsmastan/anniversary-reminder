import React, { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import {
  setName as setStoreName,
  setKeyDates,
  setScreenMode,
} from "../store/mainSlice";

const Form = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [birtdayDate, setBirtdayDate] = useState("");
  const [weddingDate, setWeddingDate] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onDInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirtdayDate(e.target.value);
  };

  const onWInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeddingDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
      <form className="flex flex-col gap-2 w-56" onSubmit={handleSubmit}>
        <label htmlFor="name">What's your partner's name?</label>
        <input
          className="px-1 border-2 border-black rounded-md mb-4"
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          required
        />

        <label htmlFor="bDateInput">When their birth day?</label>
        <input
          className="px-1 border-2 border-black rounded-md mb-4"
          type="date"
          id="bDateInput"
          value={birtdayDate}
          onChange={onDInput}
          required
          min={new Date().toISOString().split("T")[0]}
        />

        <label htmlFor="wDateInput">When your wedding day?</label>
        <input
          className="px-1 border-2 border-black rounded-md mb-4"
          type="date"
          id="wDateInput"
          value={weddingDate}
          onChange={onWInput}
          required
          min={new Date().toISOString().split("T")[0]}
        />

        <Button text="Submit" />
      </form>
    </>
  );
};

export default Form;
