import { observer } from "mobx-react-lite";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import styles from "./App.module.scss";
import bgImage from "./Image/earth-bg.png";
import Setting from "./Image/setting.svg";
import SettingsStore from "./Store/SettingsStore";
import SettingsMenu from "./Ui/SettingsMenu";
import Calendar from "./Widget/Calendar";
import Clock from "./Widget/Clock";
import Timer from "./Widget/Timer";

const settingsStore = new SettingsStore();

const App = observer(() => {
  const [shouldShowMenu, setShouldShowMenu] = React.useState(false);
  return (
    <>
      <img className={styles.bg} src={bgImage} />
      <div className={styles.app}>
        <div className={styles.container}>
          <Calendar initialTime={settingsStore.timezoneOffsetTime} />
          <Clock initialTime={settingsStore.timezoneOffsetTime} />
          <Timer />
        </div>
      </div>
      <Setting
        onClick={() => {
          setShouldShowMenu(!shouldShowMenu);
        }}
        className={styles.settingIcon}
      />
      {shouldShowMenu ? (
        <div
          className={styles.settingOverlay}
          onClick={() => {
            setShouldShowMenu(false);
          }}
        >
          <SettingsMenu settingsStore={settingsStore} />
        </div>
      ) : null}
    </>
  );
});

export default hot(App);
