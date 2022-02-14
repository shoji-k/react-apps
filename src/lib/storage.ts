export type SettingsType = {
  max: number;
  sound: boolean;
};

export const getSettingsFromStorage = () => {
  return localStorage.getItem("settings");
};

export const saveSettingsInStorage = (values: SettingsType) => {
  localStorage.setItem("settings", JSON.stringify(values));
};
