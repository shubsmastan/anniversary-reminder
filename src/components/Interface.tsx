import { useSelector } from "react-redux";
import { selectScreenMode } from "../store/mainSlice";
import Welcome from "./Welcome";

const Interface = () => {
  const screenMode = useSelector(selectScreenMode);

  if (screenMode === 0) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <Welcome />
    </>
  );
};

export default Interface;
