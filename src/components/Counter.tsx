import React, { useState } from "react";

const Counter: React.FC<{ birthdate: string }> = ({ birthdate }) => {
  const [daysLeft, setDaysLeft] = useState<number>(calculateDaysLeft());

  const calculateDaysLeft = (): number => {
    const today = new Date();
    const birthdateDate = new Date(birthdate);
    birthdateDate.setFullYear(today.getFullYear());

    if (today > birthdateDate) {
      birthdateDate.setFullYear(today.getFullYear() + 1);
    }

    const timeDiff = birthdateDate.getTime() - today.getTime();
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return days;
  };

  return (
    <div>
      <h2>Days Left: {daysLeft}</h2>
    </div>
  );
};

export default Counter;
