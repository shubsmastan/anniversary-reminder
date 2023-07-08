import Counter from "./Counter";
import { useSelector } from "react-redux";
import { selectKeyDate, selectName } from "../store/mainSlice";

const Reminders = () => {
  const { birthDate, weddingDate } = useSelector(selectKeyDate);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const name = useSelector(selectName);

  return (
    <>
      <h1 className="text-[32px] text-center mb-3">Reminders</h1>
      <Counter dateProp={birthDate} type={"birthday"} name={name} />
      <Counter dateProp={weddingDate} type={"anniversary"} name={name} />
    </>
  );
};

export default Reminders;
