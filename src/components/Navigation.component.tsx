import { useState } from "react";
// Components
import { NavigationItem } from "./NavigationItem.component";
// Data
import { navigationItems } from "../data/navigation.data";
// Types
import { INavigationItems } from "../types/navigation.types";
// Styles
import styles from "../styles/Navigation.module.scss";
import { Icon } from "./Icon.component";

export const Navigation = (): JSX.Element => {
  const [menuState, setMenuState] = useState<boolean>(false);

  const openMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <aside className={styles.navigationContainer}>
      <div
        className={`${styles.wrapper} ${
          menuState ? styles.openMenu : styles.closeMenu
        }`}
      >
        <header className={styles.menuToggle}>
          <div onClick={openMenu}>
            <Icon type="open_toggle_icon" />
          </div>
        </header>
        <nav className={styles.navigationBar}>
          <ul>
            {navigationItems.map((item: INavigationItems) => (
              <NavigationItem {...item} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
