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
  return (
    <aside className={styles.navigationContainer}>
      <div className={styles.wrapper}>
        <header className={styles.menuToggle}>
          <Icon type="open_toggle_icon" />
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
