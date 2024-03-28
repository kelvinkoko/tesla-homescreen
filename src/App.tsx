import * as React from "react";
import { hot } from "react-hot-loader/root";
import styles from "./App.module.scss";
import bgImage from "./Image/earth-bg.png";
import Setting from "./Image/setting.svg";
import SettingsMenu from "./Ui/SettingsMenu";
import Calendar from "./Widget/Calendar";
import Clock from "./Widget/Clock";
import Timer from "./Widget/Timer";

const App = () => {
  const [shouldShowMenu, setShouldShowMenu] = React.useState(false);
  return (
    <>
      <img className={styles.bg} src={bgImage} />
      <div className={styles.app}>
        <div className={styles.container}>
          <Calendar />
          <Clock />
          <Timer />
        </div>
      </div>
      <Setting
        onClick={() => {
          setShouldShowMenu(!shouldShowMenu);
        }}
        className={styles.settingIcon}
      />
      {shouldShowMenu ? <SettingsMenu /> : null}
    </>
  );
};

export default hot(App);
