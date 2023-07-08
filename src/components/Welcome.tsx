import Button from "./Button";
import { useDispatch } from "react-redux";
import { setScreenMode } from "../store/mainSlice";

const Welcome = () => {
  const dispatch = useDispatch();

  const handleYes = () => {
    dispatch(setScreenMode(1));
  };

  const handleNo = () => {
    dispatch(setScreenMode(2));
  };

  return (
    <>
      <main className="flex-1 p-5 bg-[#ECE5C7]">
        <div>Hi there, are you married?</div>
        <div className="flex gap-4">
          <Button text="Yes" handleClick={handleYes} />
          <Button text="No" handleClick={handleNo} />
        </div>
      </main>
    </>
  );
};

export default Welcome;
