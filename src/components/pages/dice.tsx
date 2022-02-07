import React, { useEffect } from "react";
import { Dice } from "../organisms/Dice";

export default function DicePage() {
  useEffect(() => {
    document.title = "Dice | Freks app";
  }, []);

  return (
    <>
      <h2 className="pb-2 text-lg font-semibold">Dice</h2>
      <div className="pb-2">
        <Dice />
      </div>
    </>
  );
}
