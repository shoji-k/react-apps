import React, { useState } from "react";
import { DiceSettings } from "../Dice";

type Props = {
  settings: DiceSettings;
  setSettings: (values: DiceSettings) => void;
  clearValues: () => void;
};

export const DiceSetting: React.FC<Props> = ({ settings, setSettings, clearValues }) => {
  const [error, setError] = useState("");

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value && Number.isInteger(value) && value > 0) {
      setSettings({ max: value });
      setError("");
    } else {
      setError("Input valid number");
    }
  };

  return (
    <>
      <div className="pb-2">Settings</div>
      <div className="pb-4  ">
        <div>
          <label className="pr-2">max</label>
          <input
            type="number"
            value={settings.max}
            onChange={handleMax}
            className="border p-2 text-right"
          />
        </div>
        {error && <div className="text-orange-500">{error}</div>}
      </div>
      <div className="">
        <button type="button" onClick={clearValues} className="rounded border border-gray-400 py-1 px-4">Clear values</button>
      </div>
    </>
  );
};
