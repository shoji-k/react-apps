import { Dice } from "components/organisms/Dice";
import { SettingContextProvider } from "lib/context/SettingContext";
import { useEffect } from "react";

export default function DicePage() {
  useEffect(() => {
    document.title = "Dice | Freks app";
  }, []);

  return (
    <SettingContextProvider>
      <div className="flex flex-col h-full">
        <h2 className="pb-2 text-lg font-semibold">Dice</h2>
        <div className="pb-2 grow">
          <Dice />
        </div>
      </div>
    </SettingContextProvider>
  );
}
