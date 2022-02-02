import React from "react";

type CounterList = [number, number, number, number, number, number];

type Props = {
  countList: CounterList;
};

export const DiceCounter: React.FC<Props> = ({ countList }) => {
  return (
    <>
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
    </>
  );
};
