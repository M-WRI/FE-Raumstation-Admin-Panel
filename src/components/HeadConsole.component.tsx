import type { RootState } from "../store/store";
import { useSelector } from "react-redux";
// COMPONENTS
import { Headline } from "./Headline.component";
import { Button } from "./Button.component";
import { Icon } from "./Icon.component";
// STYLES
import styles from "../styles/HeadConsole.module.scss";

export const HeadConsole = () => {
  const user = useSelector((state: RootState) => state.user);

  console.log(user, "<--");

  return (
    <header className={styles.headConsoleContainer}>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <Icon type="astronaut_icon" />
          <div className={styles.border} />
          <Button type="L">Raumstation Berlin</Button>
        </div>
        <div className={styles.profileContainer}>
          <div className={styles.profileImageContainer}>
            {user.profileImage ? (
              <img src={user.profileImage} alt={user.firstName} />
            ) : (
              <Headline type="h2">
                {`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`}
              </Headline>
            )}
          </div>
          <Button type="L">{`${user.firstName} ${user.lastName}`}</Button>
        </div>
      </div>
    </header>
  );
};
