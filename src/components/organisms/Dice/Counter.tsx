import React, { useState } from "react";

type Props = {
  countList: number[];
};

const One = ({ roll, count }: { roll: number; count: number }) => (
  <div className="flex flex-col mb-2">
    <div className="border text-center px-2">{roll}</div>
    <div className="border text-right px-2">{count}</div>
  </div>
);

export const DiceCounter: React.FC<Props> = React.memo(({ countList }) => {
  console.log("list");
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className="pb-2 text-teal-500 cursor-pointer"
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? "Hide Counter" : "Show Counter"}
      </div>
      {show && (
        <div>
          <div className="flex flex-wrap">
            {countList.map((n, i) => (
              <One key={i} roll={i + 1} count={n} />
            ))}
          </div>
        </div>
      )}
    </>
  );
});
