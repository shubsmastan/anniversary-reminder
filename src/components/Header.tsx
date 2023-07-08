import { useDispatch } from "react-redux";
import { setScreenMode } from "../store/mainSlice";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
      <header className="flex items-center justify-between gap-3 p-5 bg-[#116A7B] text-white">
        <button
          className="flex items-center gap-3 border-2 border-white px-2 py-1 rounded-md"
          onClick={() => {
            dispatch(setScreenMode(0));
          }}>
          💍
          <h1 className="text-lg">Save My Marriage!</h1>
        </button>
        <div>by Team Rocket (The Jump CH14)</div>
      </header>
    </>
  );
};

export default Header;
