import { useSelector } from "react-redux";
import { selectScreenMode } from "../store/mainSlice";
import Welcome from "./Welcome";

const Interface = () => {
  const screenMode = useSelector(selectScreenMode);

  if (screenMode === 1) {
    return (
      <>
        <div>Screen mode is 1</div>
      </>
    );
  }

  if (screenMode === 2) {
    return (
      <>
        <div>Screen mode is 2</div>
      </>
    );
  }

  return <Welcome />;
};

export default Interface;
