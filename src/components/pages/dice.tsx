import React from "react";
import { Dice } from "../organisms/Dice";

export default function DicePage() {
  return (
    <>
      <h2 className="pb-2 text-lg font-semibold">Dice</h2>
      <div className="pb-2">
        <Dice />
      </div>
    </>
  );
}
