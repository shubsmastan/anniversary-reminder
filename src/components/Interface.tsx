import { useSelector } from "react-redux";
import { selectScreenMode } from "../store/mainSlice";
import Welcome from "./Welcome";
import Positive from "./Positive";
import Negative from "./Negative";
import Reminders from "./reminders";

const Interface = () => {
  const screenMode = useSelector(selectScreenMode);

  if (screenMode === 1) {
    return <Positive />;
  }

  if (screenMode === 2) {
    return <Negative />;
  }

  if (screenMode === 3) {
    return <Reminders />;
  }

  return <Welcome />;
};

export default Interface;
