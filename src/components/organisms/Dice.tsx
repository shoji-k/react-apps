import React, { useState } from "react";
import { LoadingIcon } from "../atoms/LoadingIcon";

type CounterList = [number, number, number, number, number, number];

const max = 6;

const getDiceNumber = () => {
  return Math.floor(Math.random() * max) + 1;
};

export function Dice() {
  const [rolling, setRolling] = useState(false);
  const [result, setResult] = useState(0);
  const [logs, setLogs] = useState<number[]>([]);
  const [countList, setCountList] = useState<CounterList>([0, 0, 0, 0, 0, 0]);

  const handleClick = () => {
    setRolling(true);

    const n = getDiceNumber();
    setResult(n);
    setLogs((prev) => [...prev, n]);
    const newList = countList.map((c, i) => {
      if (i === n - 1) {
        return c + 1;
      }
      return c;
    }) as CounterList;
    setCountList(newList);

    setTimeout(() => setRolling(false), 300);
  };

  return (
    <>
      <div className="pb-2">
        <button
          className="rounded bg-teal-300 text-white p-8"
          onClick={handleClick}
        >
          Tap
        </button>
      </div>
      <div className="pb-8">
        <div className="flex justify-center items-center border-collapse border border-slate-400 w-24 h-24 text-center">
          {rolling ? <LoadingIcon /> : <span>{result}</span>}
        </div>
      </div>
      <div className="pb-2">
        <div className="pb-2">Counter</div>
        <div>
          <table className="table-auto border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className="border border-slate-300 px-2">1</th>
                <th className="border border-slate-300 px-2">2</th>
                <th className="border border-slate-300 px-2">3</th>
                <th className="border border-slate-300 px-2">4</th>
                <th className="border border-slate-300 px-2">5</th>
                <th className="border border-slate-300 px-2">6</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 px-2">{countList[0]}</td>
                <td className="border border-slate-300 px-2">{countList[1]}</td>
                <td className="border border-slate-300 px-2">{countList[2]}</td>
                <td className="border border-slate-300 px-2">{countList[3]}</td>
                <td className="border border-slate-300 px-2">{countList[4]}</td>
                <td className="border border-slate-300 px-2">{countList[5]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="pb-2">
        <div className="pb-2">Log</div>
        <div className="flex flex-wrap">
          {logs.map((n, i) => (
            <div key={i} className="border p-2 mr-2 mb-2 text-center">
              {n}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
