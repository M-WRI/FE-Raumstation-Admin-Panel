import type { RootState } from "../store/store";
import { useSelector } from "react-redux";
// COMPONENTS
import { Button } from "./Button.component";
import { Icon } from "./Icon.component";
// STYLES
import styles from "../styles/HeadConsole.module.scss";
import { ProfileImage } from "./ProfileImage.component";

export const HeadConsole = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <header className={styles.headConsoleContainer}>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <Icon type="astronaut_icon" />
          <div className={styles.border} />
          <Button text="Raumstation Berlin" type="L" />
        </div>
        <div className={styles.profileContainer}>
          <Button text={`${user.firstName} ${user.lastName}`} type="L">
            <ProfileImage type="S" />
          </Button>
        </div>
      </div>
    </header>
  );
};
