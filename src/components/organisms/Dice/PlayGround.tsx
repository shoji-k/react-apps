import React, { useState } from "react";
import { LoadingIcon } from "../../atoms/LoadingIcon";

type Props = {
  max: number;
  sound: boolean;
  setResult: (score: number) => void;
};

const Dice = ({ rolling, dice }: { rolling: boolean; dice: number }) => {
  return (
    <div className={rolling ? "animate-spin" : ""}>
      <div className="flex justify-center items-center border-collapse border border-slate-400 w-24 h-24 text-center text-lg">
        {rolling ? <LoadingIcon /> : <span>{dice}</span>}
      </div>
    </div>
  );
};

export const DicePlayground: React.FC<Props> = ({ max, sound, setResult }) => {
  const [rolling, setRolling] = useState(false);
  const [dice, setDice] = useState(0);

  const handleClick = () => {
    setRolling(true);
    makeSound("rolling");

    setTimeout(() => {
      setRolling(false);
      const n = getDiceNumber();
      setDice(n);
      setResult(n);

      setTimeout(() => {
        makeSound("finish");
      }, 300);
    }, 2000);
  };

  const getDiceNumber = () => {
    return Math.floor(Math.random() * max) + 1;
  };

  const makeSound = (type: "rolling" | "finish") => {
    if (!sound) return;

    const source = type === "rolling" ? "/sound/rolling.mp3" : "/sound/jajan.mp3";
    const audio = new Audio(source);
    audio.play();
  };

  return (
    <>
      <div className="pt-8 pb-10 flex justify-center">
        <Dice rolling={rolling} dice={dice} />
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
