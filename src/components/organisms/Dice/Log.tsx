import React from "react";

type Props = {
  logs: number[];
};

export const DiceLog: React.FC<Props> = ({ logs }) => {
  return (
    <>
      <div className="pb-2">Log</div>
      <div className="flex flex-wrap">
        {logs.map((n, i) => (
          <div key={i} className="border p-2 mr-2 mb-2 text-center">
            {n}
          </div>
        ))}
      </div>
    </>
  );
};
