import Counter from "./Counter";
import { useSelector } from "react-redux";
import { selectKeyDate } from "../store/mainSlice";

const Reminders = () => {

    const {birthDate, weddingDate } = useSelector(selectKeyDate);

  return (
    <>
      <h1 className="text-2xl">Reminders</h1>


      <Counter 
      dateProp={birthDate}
      type={'birthday'}
      />

      <Counter 
      dateProp={weddingDate}
      type={'anniversary'}
      />
    </>
  );
};

export default Reminders;
