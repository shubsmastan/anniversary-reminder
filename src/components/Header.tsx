import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRing } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between gap-3 p-5 bg-[#116A7B] text-white">
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faRing} size="xl" />
          <h1 className="text-lg">Save My Marriage!</h1>
        </div>
        <div>by Team Rocket (The Jump CH14)</div>
      </header>
    </>
  );
};

export default Header;
