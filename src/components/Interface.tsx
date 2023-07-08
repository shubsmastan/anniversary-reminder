import { useSelector } from "react-redux";
import { selectScreenMode } from "../store/mainSlice";
import Welcome from "./Welcome";
import Positive from "./Positive";
import Negative from "./Negative";

const Interface = () => {
  const screenMode = useSelector(selectScreenMode);

  if (screenMode === 1) {
    return <Positive />;
  }

  if (screenMode === 2) {
    return <Negative />;
  }

  return <Welcome />;
};

export default Interface;
