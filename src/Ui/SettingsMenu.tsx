import * as React from "react";
import { useState } from "react";
import TimezoneSelect, {
  ITimezoneOption,
  type ITimezone
} from "react-timezone-select";
import styles from "./SettingsMenu.module.scss";

const SettingsMenu = () => {
  const [selectedItem, setSelectedItem] = React.useState(MENU.TIME);
  const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  console.log((selectedTimezone as ITimezoneOption).offset);

  return (
    <div className={styles.settingsPanel}>
      <div className={styles.menu}>
        {Object.values(MENU).map(item => {
          return (
            <div
              onClick={() => {
                setSelectedItem(item);
              }}
              className={`${styles.menuItem} ${
                item == selectedItem ? styles.itemHighlight : null
              }`}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className={styles.settingContent}>
        <div className={styles.settingTitle}>Time Zone</div>
        <TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
          styles={{
            option: (baseStyles, state) => ({
              ...baseStyles,
              color: "rgba(0, 0, 0, 0.8);"
            }),
            container: (baseStyles, state) => ({
              ...baseStyles,
              width: "250px"
            })
          }}
        />
      </div>
    </div>
  );
};

enum MENU {
  TIME = "Time",
  NEWS = "News"
}

export default SettingsMenu;
