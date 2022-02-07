import React, { useState } from "react";
import { DiceSettings } from "../Dice";

type FormProps = Pick<DiceSettings, "max">;

type Props = {
  settings: DiceSettings;
  setSettings: (values: DiceSettings) => void;
  clearValues: () => void;
};

export const DiceSetting: React.FC<Props> = ({
  settings,
  setSettings,
  clearValues,
}) => {
  const [form, setForm] = useState<FormProps>(settings);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setForm({ max: value });
    if (value && Number.isInteger(value) && value > 0) {
      setSettings({ ...settings, max: value });
      setError("");
    } else {
      setError("Input valid number");
    }
  };

  const handleSound = (e: React.MouseEvent<HTMLInputElement>) => {
    setSettings({ ...settings, sound: e.currentTarget.value === "on" });
  };

  return (
    <>
      <div
        className="pb-2 text-teal-500 cursor-pointer"
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? "Hide Settings" : "Show Settings"}
      </div>
      {show && (
        <>
          <div className="pb-4  ">
            <div>
              <label htmlFor="max" className="pr-2">
                max
              </label>
              <input
                id="max"
                type="number"
                value={form.max}
                onChange={handleMax}
                min="1"
                className="border p-2 text-right"
              />
            </div>
            {error && <div className="text-orange-500">{error}</div>}
          </div>
          <div className="pb-4 flex flex-row">
            <div className="pr-2">Sound</div>
            <div className="pr-2">
              <label htmlFor="sound_on" className="pr-2">
                On
              </label>
              <input
                id="sound_on"
                type="radio"
                name="sound"
                value={"on"}
                defaultChecked={settings.sound}
                onClick={handleSound}
              />
            </div>
            <div className="pr-2">
              <label htmlFor="sound_off" className="pr-2">
                Off
              </label>
              <input
                id="sound_off"
                type="radio"
                name="sound"
                value={"off"}
                defaultChecked={!settings.sound}
                onClick={handleSound}
              />
            </div>
            {error && <div className="text-orange-500">{error}</div>}
          </div>
          <div className="">
            <button
              type="button"
              onClick={clearValues}
              className="rounded border border-gray-400 py-1 px-4"
            >
              Clear values
            </button>
          </div>
        </>
      )}
    </>
  );
};