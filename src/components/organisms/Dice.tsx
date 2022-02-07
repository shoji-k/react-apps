import React, { useEffect, useState } from "react";
import { DiceCounter } from "./Dice/Counter";
import { DiceHistory } from "./Dice/History";
import { DicePlayground } from "./Dice/PlayGround";
import { DiceSetting } from "./Dice/Setting";

const initializeList = (max: number) => {
  return [...Array(max)].fill(0);
};

export type DiceSettings = {
  max: number;
};

export function Dice() {
  const [logs, setLogs] = useState<number[]>([]);
  const [countList, setCountList] = useState<number[]>([]);
  const [settings, setSettings] = useState<DiceSettings>({
    max: 6,
  });

  useEffect(() => {
    const list = initializeList(settings.max);
    setCountList(list);
  }, [settings]);

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

  const handleSetSettings = (values: DiceSettings) => {
    setSettings(values);
  };

  const handleClearValues = () => {
    setLogs([]);
    const list = initializeList(settings.max);
    setCountList(list);
  };

  return (
    <>
      <div className="pb-8">
        <DicePlayground max={settings.max} setResult={setResult} />
      </div>
      <div className="pb-2">
        <DiceCounter max={settings.max} countList={countList} />
      </div>
      <div className="pb-2">
        <DiceHistory logs={logs} />
      </div>
      <div className="pb-2">
        <DiceSetting
          settings={settings}
          setSettings={handleSetSettings}
          clearValues={handleClearValues}
        />
      </div>
    </>
  );
}
