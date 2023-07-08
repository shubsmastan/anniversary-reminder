import { useSelector } from "react-redux";
import { selectScreenMode } from "../store/mainSlice";
import Welcome from "./Welcome";
import Header from "./Header";

const Interface = () => {
  const screenMode = useSelector(selectScreenMode);

  if (screenMode === 0) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  if (screenMode === 1) {
    return (
      <>
        <div>Screen mode is 1</div>
      </>
    );
  }

  return (
    <>
      <Header />
      <Welcome />
    </>
  );
};

export default Interface;
