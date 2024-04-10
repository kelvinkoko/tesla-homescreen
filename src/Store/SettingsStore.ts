import { makeAutoObservable } from "mobx";
import { ITimezone, ITimezoneOption } from "react-timezone-select";

class SettingsStore {
  timezone: ITimezone =
    getDataFromLocalStorage("timezone") ??
    Intl.DateTimeFormat().resolvedOptions().timeZone;
  gmtOffset: number = parseFloat(localStorage.getItem("gmtOffset") ?? "0");

  constructor() {
    makeAutoObservable(this);
  }

  get timezoneOffsetTime(): Date {
    const currentUTC =
      new Date().getTime() + new Date().getTimezoneOffset() * 60000;
    return new Date(currentUTC + this.gmtOffset * 60 * 60 * 1000);
  }

  updateTimezone(newTimezone: ITimezone) {
    this.timezone = newTimezone;
    this.gmtOffset = (newTimezone as ITimezoneOption).offset ?? 0;
    storeDataInLocalStorage("timezone", this.timezone);
    localStorage.setItem("gmtOffset", this.gmtOffset.toString());
  }
}

// Serialize data to string before storing in localStorage
const serializeData = (data: ITimezone): string => {
  if (typeof data === "string") {
    return data; // If data is already a string, return it directly
  } else {
    return JSON.stringify(data); // Serialize object to JSON string
  }
};

// Deserialize string to data when retrieving from localStorage
const deserializeData = (serializedData: string): ITimezone => {
  try {
    // Try to parse JSON string
    const parsedData = JSON.parse(serializedData);
    return parsedData;
  } catch (error) {
    // If parsing fails, assume it's a string
    return serializedData;
  }
};

// Store data in localStorage
const storeDataInLocalStorage = (key: string, data: ITimezone) => {
  const serializedData = serializeData(data);
  localStorage.setItem(key, serializedData);
};

// Retrieve data from localStorage
const getDataFromLocalStorage = (key: string): ITimezone | null => {
  const serializedData = localStorage.getItem(key);
  if (serializedData !== null) {
    return deserializeData(serializedData);
  } else {
    return null;
  }
};

export default SettingsStore;
