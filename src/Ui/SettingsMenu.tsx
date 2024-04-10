import { observer } from "mobx-react-lite";
import * as React from "react";
import TimezoneSelect from "react-timezone-select";
import settingsStore from "../Store/SettingsStore";
import styles from "./SettingsMenu.module.scss";

const SettingsMenu = observer(() => {
  const [selectedItem, setSelectedItem] = React.useState(MENU.TIME);
  return (
    <div className={styles.settingsPanel} onClick={handleClick}>
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
          value={settingsStore.timezone}
          onChange={timezone => {
            settingsStore.updateTimezone(timezone);
          }}
          styles={{
            option: (baseStyles, state) => ({
              ...baseStyles,
              color: "rgba(0, 0, 0, 0.8);"
            }),
            container: (baseStyles, state) => ({
              ...baseStyles,
              width: "100%"
            })
          }}
        />
      </div>
    </div>
  );
});

const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
  // Stop propagation to settings menu overlay for dismiss the menu
  event.stopPropagation();
};

enum MENU {
  TIME = "Time",
  NEWS = "News"
}

export default SettingsMenu;
