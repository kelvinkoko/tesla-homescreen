import { makeAutoObservable } from "mobx";
import { ITimezone, ITimezoneOption } from "react-timezone-select";

class SettingsStore {
  timezone: ITimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  gmtOffset: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  updateTimezone(newTimezone: ITimezone) {
    this.timezone = newTimezone;
    this.gmtOffset = (newTimezone as ITimezoneOption).offset ?? 0;
  }
}

const settingsStore = new SettingsStore();
export default settingsStore;
