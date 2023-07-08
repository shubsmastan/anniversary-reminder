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

  return (
    <>
      <Header />
      <Welcome />
    </>
  );
};

export default Interface;
