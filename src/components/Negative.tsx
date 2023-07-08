import Button from "./Button";
import { useDispatch } from "react-redux";
import { setScreenMode } from "../store/mainSlice";

const Negative = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-[36px] text-center mt-20 mb-10 animate-pulse">
        <p>Keep the divorce rate down!</p>
        <p>Don't get married!</p>
      </div>
      <div className="mx-auto w-20">
        <Button
          text="Back"
          handleClick={() => {
            dispatch(setScreenMode(0));
          }}
        />
      </div>
    </>
  );
};

export default Negative;
