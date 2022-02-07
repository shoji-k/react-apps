import React, { useCallback, useEffect, useState } from "react";
import { DiceCounter } from "./Dice/Counter";
import { DiceHistory } from "./Dice/History";
import { DicePlayground } from "./Dice/PlayGround";
import { DiceSetting } from "./Dice/Setting";

const initializeList = (max: number) => {
  return [...Array(max)].fill(0);
};

export type DiceSettings = {
  max: number;
  sound: boolean;
};

export function Dice() {
  const [logs, setLogs] = useState<number[]>([]);
  const [countList, setCountList] = useState<number[]>([]);
  const [settings, setSettings] = useState<DiceSettings>({
    max: 6,
    sound: true,
  });

  useEffect(() => {
    const list = initializeList(settings.max);
    setCountList(list);
  }, [settings.max]);

  const setResult = useCallback(
    (result: number) => {
      setLogs((prev) => [...prev, result]);
      const newList = countList.map((c, i) => {
        if (i === result - 1) {
          return c + 1;
        }
        return c;
      });
      setCountList(newList);
    },
    [countList]
  );

  const handleSetSettings = useCallback((values: DiceSettings) => {
    setSettings(values);
  }, []);

  const changeSound = useCallback(() => {
    setSettings((prev) => {
      return {
        ...prev,
        sound: !prev.sound,
      };
    });
  }, []);

  const handleClearValues = useCallback(() => {
    setLogs([]);
    const list = initializeList(settings.max);
    setCountList(list);
  }, [settings.max]);

  return (
    <>
      <div className="pb-8">
        <DicePlayground
          max={settings.max}
          sound={settings.sound}
          setResult={setResult}
          changeSound={changeSound}
        />
      </div>
      <div className="pb-2">
        <DiceCounter countList={countList} />
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
