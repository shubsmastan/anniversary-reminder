import React, { useState } from "react";

const Counter: React.FC<{ birthdate: string }> = ({ birthdate }) => {
  const calculateDaysLeft = (): number => {
    const today = new Date();
    const birthdateDate = new Date(birthdate);
    birthdateDate.setFullYear(today.getFullYear());

    // Adjust the birthdate to the next year if it has already passed
    if (today > birthdateDate) {
      birthdateDate.setFullYear(today.getFullYear() + 1);
    }

    // Calculate the difference in milliseconds between the birthdate and today
    const timeDiff = birthdateDate.getTime() - today.getTime();

    // Convert milliseconds to days
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return days;
  };

  const [daysLeft, setDaysLeft] = useState<number>(calculateDaysLeft());

  return (
    <div>
      <h2>Days Left: {daysLeft}</h2>
    </div>
  );
};

export default Counter;
