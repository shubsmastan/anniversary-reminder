import React from "react";
import { useSelector } from "react-redux";
import { selectScreenMode } from "./store/mainSlice";

const Interface = () => {
  const screenMode = useSelector(selectScreenMode);

  if (screenMode === 0) {
    return (
      <>
        <div>hi</div>
      </>
    );
  } else {
    return (
      <>
        <div>bye</div>
      </>
    );
  }
};

export default Interface;