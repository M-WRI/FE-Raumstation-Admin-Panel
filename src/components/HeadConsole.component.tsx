// COMPONENTS
import { Button } from "./Button.component";
import { Icon } from "./Icon.component";
// STYLES
import styles from "../styles/HeadConsole.module.scss";

export const HeadConsole = () => {
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
