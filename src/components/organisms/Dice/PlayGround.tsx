import { LoadingIcon } from "components/atoms/LoadingIcon";
import { publicUrl } from "lib/common";
import { useSettings } from "lib/context/SettingContext";
import React, { useState } from "react";

type Props = {
  setResult: (score: number) => void;
  changeSound: () => void;
};

const Dice = ({ rolling, dice }: { rolling: boolean; dice: number }) => {
  return (
    <div
      className={`flex justify-center items-center h-full w-full ${
        rolling && "animate-spin"
      }`}
    >
      <div
        className="flex justify-center items-center border-collapse border border-slate-400 text-center"
        style={{ height: "80%", aspectRatio: "1 / 1", fontSize: "8vh" }}
      >
        {rolling ? <LoadingIcon /> : <span>{dice}</span>}
      </div>
    </div>
  );
};

export const DicePlayground: React.FC<Props> = ({ setResult, changeSound }) => {
  const settings = useSettings();
  const { max, sound } = settings;

  const [rolling, setRolling] = useState(false);
  const [dice, setDice] = useState(0);

  const handleClick = () => {
    setRolling(true);
    document.body.style.overflow = "hidden";
    makeSound("rolling");

    setTimeout(() => {
      setRolling(false);
      const n = getDiceNumber();
      setDice(n);
      setResult(n);

      setTimeout(() => {
        makeSound("finish");
        document.body.style.overflow = "visible";
      }, 300);
    }, 2000);
  };

  const getDiceNumber = () => {
    return Math.floor(Math.random() * max) + 1;
  };

  const rollingAudio = new Audio(`${publicUrl}/sound/rolling.mp3`);
  const finishAudio = new Audio(`${publicUrl}/sound/jajan.mp3`);

  const makeSound = (type: "rolling" | "finish") => {
    if (!sound) return;

    if (type === "rolling") {
      rollingAudio.play();
    }
    if (type === "finish") {
      rollingAudio.pause();
      finishAudio.play();
    }
  };

  const handleSound = () => {
    changeSound();
  };

  return (
    <div className="relative h-full flex flex-col">
      <div className="absolute left-0 text-xs">1 ~ {max}</div>
      <div className="absolute right-0" onClick={handleSound}>
        {sound ? "🔊" : "🔇"}
      </div>
      <div className="pt-8 pb-10 grow flex justify-center items-center">
        <Dice rolling={rolling} dice={dice} />
      </div>
      <div>
        <button
          className="rounded bg-teal-300 text-white w-full h-24"
          onClick={handleClick}
          disabled={rolling}
        >
          Tap
        </button>
      </div>
    </div>
  );
};
