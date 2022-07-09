// Data
import { navigationItems } from "../data/navigation.data";
// Types
import { INavigationItems } from "../types/navigation.types";
// Styles
import styles from "../styles/Navigation.module.scss";

export const Navigation = (): JSX.Element => {
  return (
    <aside className={styles.navigationContainer}>
      <nav>
        <ul>
          {navigationItems.map((item: INavigationItems) => (
            <li key={item.id}>{item.label}</li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
