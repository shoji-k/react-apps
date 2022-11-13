import { forwardRef, useImperativeHandle, useState } from "react";

export interface Handler {
  setValue(v: number): void;
  clearValues(): void;
}

export const DiceHistory = forwardRef<Handler>((_props, ref) => {
  const [histories, setHistories] = useState<number[]>([]);
  const [show, setShow] = useState(false);

  useImperativeHandle(ref, () => ({
    setValue(v: number) {
      setHistories((prev) => [...prev, v]);
    },
    clearValues() {
      setHistories([]);
    },
  }));

  return (
    <>
      <div
        className="pb-2 text-teal-500 cursor-pointer"
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? "History" : "Show History"}
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
