import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  useSettings,
  useUpdateSettings,
} from "../../lib/context/SettingContext";
import { DiceCounter } from "./Dice/Counter";
import { DiceHistory, Handler } from "./Dice/History";
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
  const historyRef = useRef({} as Handler);

  const settings = useSettings();
  const updateSettings = useUpdateSettings();

  const [countList, setCountList] = useState<number[]>([]);

  useEffect(() => {
    const list = initializeList(settings.max);
    setCountList(list);
  }, [settings.max]);

  const setResult = useCallback(
    (result: number) => {
      historyRef.current.setValue(result);
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

  const changeSound = useCallback(() => {
    updateSettings({ sound: !settings.sound });
  }, [settings, updateSettings]);

  const handleClearValues = useCallback(() => {
    const list = initializeList(settings.max);
    setCountList(list);
    historyRef.current.clearValues();
  }, [settings.max]);

  return (
    <>
      <div className="pb-8">
        <DicePlayground setResult={setResult} changeSound={changeSound} />
      </div>
      <div className="pb-2">
        <DiceCounter countList={countList} />
      </div>
      <div className="pb-2">
        <DiceHistory ref={historyRef} />
      </div>
      <div className="pb-2">
        <DiceSetting clearValues={handleClearValues} />
      </div>
    </>
  );
}
