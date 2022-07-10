// COMPONENTS
import { Button } from "./Button.component";
import { Icon } from "./Icon.component";
import type { RootState } from "../store/store";
import { useSelector } from "react-redux";
// STYLES
import styles from "../styles/HeadConsole.module.scss";

export const HeadConsole = () => {
  const user = useSelector((state: RootState) => state.user);

  console.log(user.firstName);

  return (
    <header className={styles.headConsoleContainer}>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <Icon type="astronaut_icon" />
          <div className={styles.border} />
          <Button type="L">Raumstation Berlin</Button>
        </div>
        <div></div>
      </div>
    </header>
  );
};
