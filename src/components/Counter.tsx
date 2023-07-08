import { useEffect, useState } from "react";

interface CounterProps {
  dateProp: string;
  name: string;
  type: string;
}

const Counter = ({ dateProp, type, name }: CounterProps) => {
  const calculateDaysLeft = (): number => {
    const today = new Date();
    const date = new Date(dateProp);
    date.setFullYear(today.getFullYear());

    if (today > date) {
      date.setFullYear(today.getFullYear() + 1);
    }

    const timeDiff = date.getTime() - today.getTime();

    return timeDiff;
  };

  const [timeLeft, setTimeLeft] = useState<number>(calculateDaysLeft());

  useEffect(() => {
    const today = new Date(Date.now());
    const date = new Date(dateProp);
    const timeDiff = date.getTime() - today.getTime();
    const timer = setInterval(() => {
      setTimeLeft(timeDiff);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [dateProp, timeLeft]);

  const days = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24 * 30 * 365)) / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="text-center">
      <div className="text-2xl mb-5">
        <p className="mb-5">
          Time left to {name}'s {type}
        </p>
        <div className="mx-auto rounded-md border-black border-2 p-3 w-56 bg-slate-300 text-[32px]">
          <p className="mb-2">{days} days</p>
          <p className="mb-2">{hours} hours</p>
          <p className="mb-2">{minutes} minutes</p>
          <p className="mb-2">{seconds} seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
