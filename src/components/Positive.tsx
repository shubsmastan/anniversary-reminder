import * as React from "react";
import { useSelector } from "react-redux";
import { selectKeyDate } from "../store/mainSlice";

const Positive = () => {
  return (
    <>
      <div>
        <h1>So you are married!</h1>
        <p>In that case, better remember all the important dates!</p>
      </div>
    </>
  );
};

export default Positive;
