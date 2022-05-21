import React, { useContext, useEffect, useState } from "react";
import {
  getSettingsFromStorage,
  saveSettingsInStorage,
  SettingsType,
} from "../storage";

const initialContext: {
  settings: SettingsType;
  update: (values: Partial<SettingsType>) => void;
} = {
  settings: {
    max: 6,
    sound: true,
  },
  update: () => {},
};

const SettingContext = React.createContext(initialContext);

type Props = {
  children: React.ReactNode;
}

export const SettingContextProvider: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState<SettingsType>(
    initialContext.settings
  );

  useEffect(() => {
    const settings = getSettingsFromStorage();
    if (settings) {
      const values = JSON.parse(settings);
      setSettings({
        ...initialContext.settings,
        ...values,
      });
    }
    setTimeout(() => setLoading(false), 1000); // prepare delay
  }, []);

  const update = (values: Partial<SettingsType>) => {
    const updated = {
      ...settings,
      ...values,
    };
    saveSettingsInStorage(updated);
    setSettings(updated);
  };

  return (
    <SettingContext.Provider value={{ settings, update }}>
      {loading ? "loading..." : children}
    </SettingContext.Provider>
  );
};

export const useSettings = () => {
  return useContext(SettingContext).settings;
};
export const useUpdateSettings = () => {
  return useContext(SettingContext).update;
};
