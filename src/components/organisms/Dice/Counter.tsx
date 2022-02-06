import React from "react";

type Props = {
  max: number;
  countList: number[];
};

export const DiceCounter: React.FC<Props> = ({ max, countList }) => {
  const indexes = [...Array(max)].map((_, i) => i);

  return (
    <>
      <div className="pb-2">Counter</div>
      <div>
        <table className="table-auto border-collapse border border-slate-400">
          <thead>
            <tr>
              {indexes.map((n) => (
                <th key={n} className="border border-slate-300 px-2">
                  {n + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {indexes.map((n) => (
                <td key={n} className="border border-slate-300 px-2">
                  {countList[n]}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
