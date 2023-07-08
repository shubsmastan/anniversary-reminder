import React, { useState } from "react";

const Counter: React.FC<{ dateProp: string; type: string }> = ({
  dateProp,
  type,
}) => {
  const calculateDaysLeft = (): number => {
    const today = new Date();
    const date = new Date(dateProp);
    date.setFullYear(today.getFullYear());

    // Adjust the date to the next year if it has already passed
    if (today > date) {
      date.setFullYear(today.getFullYear() + 1);
    }

    // Calculate the difference in milliseconds between the date and today
    const timeDiff = date.getTime() - today.getTime();

    // Convert milliseconds to days
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return days;
  };

  const [daysLeft, setDaysLeft] = useState<number>(calculateDaysLeft());

  return (
    <div className="border-2 border-black pb-3 mb-3">
      <h2 className="">Days Left to {type}: </h2>
      <div className="">{daysLeft}</div>
    </div>
  );
};

export default Counter;
