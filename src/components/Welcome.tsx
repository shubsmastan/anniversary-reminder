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
    <div className="text-center text-2xl flex items-center justify-center h-full">
      <div className="mb-32">
        <div className="mb-5">Hi there, are you married?</div>
        <div className="flex gap-10 justify-center">
          <Button text="Yes" handleClick={handleYes} />
          <Button text="No" handleClick={handleNo} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
