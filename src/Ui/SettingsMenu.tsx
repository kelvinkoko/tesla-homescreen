import * as React from "react";
import styles from "./SettingsMenu.module.scss";

const SettingsMenu = () => {
  const [selectedItem, setSelectedItem] = React.useState(MENU.TIME);
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
      </div>
    </div>
  );
};

enum MENU {
  TIME = "Time",
  NEWS = "News"
}

export default SettingsMenu;
