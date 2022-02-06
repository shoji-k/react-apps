import React, { useEffect, useState } from "react";
import { DiceCounter } from "./Dice/Counter";
import { DiceLog } from "./Dice/Log";
import { DicePlayground } from "./Dice/PlayGround";

const max = 6;

export function Dice() {
  const [logs, setLogs] = useState<number[]>([]);
  const [countList, setCountList] = useState<number[]>([]);

  useEffect(() => {
    const list = [...Array(max)].fill(0);
    setCountList(list);
  }, []);

  const setResult = (result: number) => {
    setLogs((prev) => [...prev, result]);
    const newList = countList.map((c, i) => {
      if (i === result - 1) {
        return c + 1;
      }
      return c;
    });
    setCountList(newList);
  };

  return (
    <>
      <div className="pb-8">
        <DicePlayground max={max} setResult={setResult} />
      </div>
      <div className="pb-2">
        <DiceCounter countList={countList} />
      </div>
      <div className="pb-2">
        <DiceLog logs={logs} />
      </div>
    </>
  );
}
