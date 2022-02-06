import React, { useState } from "react";
import { LoadingIcon } from "../../atoms/LoadingIcon";

type Props = {
  max: number;
  setResult: (score: number) => void;
};

export const DicePlayground: React.FC<Props> = ({ max, setResult }) => {
  const [rolling, setRolling] = useState(false);
  const [dice, setDice] = useState(0);

  const handleClick = () => {
    setRolling(true);

    setTimeout(() => {
      setRolling(false);
      const n = getDiceNumber();
      setDice(n);
      setResult(n);
    }, 300);
  };

  const getDiceNumber = () => {
    return Math.floor(Math.random() * max) + 1;
  };
  
  return (
    <>
      <div className="pb-4 flex justify-center">
        <div className="flex justify-center items-center border-collapse border border-slate-400 w-24 h-24 text-center">
          {rolling ? <LoadingIcon /> : <span>{dice}</span>}
        </div>
      </div>
      <div className="">
        <button
          className="rounded bg-teal-300 text-white w-full h-24"
          onClick={handleClick}
        >
          Tap
        </button>
      </div>
    </>
  );
};
