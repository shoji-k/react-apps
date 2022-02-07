import React, { useState } from "react";

type Props = {
  histories: number[];
};

export const DiceHistory: React.FC<Props> = React.memo(({ histories }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className="pb-2 text-teal-500 cursor-pointer"
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? "Hide History" : "Show History"}
      </div>
      {show && (
        <div className="flex flex-wrap">
          {histories.map((n, i) => (
            <div key={i} className="border p-2 mr-2 mb-2 text-center">
              {n}
            </div>
          ))}
          {histories.length === 0 && <p>(none)</p>}
        </div>
      )}
    </>
  );
});
