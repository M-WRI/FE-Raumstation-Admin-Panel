import { useContext, useState } from "react";
// Components
import { Icon } from "./Icon.component";
import { NavigationItem } from "./NavigationItem.component";
import { NavigationContext } from "../context/NavigationContext";
// Types
import { INavigationItem } from "../types/navigation.types";
// Styles
import styles from "../styles/Navigation.module.scss";

export const Navigation = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { navigation, setNavigation } = useContext(NavigationContext);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const setItemActive = (id: string) => {
    const newState = navigation.map((obj) => {
      if (obj.id === id) {
        return { ...obj, isActive: true };
      }
      return { ...obj, isActive: false };
    });

    setNavigation(newState);
  };

  return (
    <aside className={styles.navigationContainer}>
      <div
        className={`${styles.wrapper} ${
          isOpen ? styles.openMenu : styles.closeMenu
        }`}
      >
        <header className={styles.menuToggle}>
          <div onClick={openMenu}>
            <Icon type="open_toggle_icon" />
          </div>
        </header>
        <nav className={styles.navigationBar}>
          <ul>
            {navigation.map((item: INavigationItem) => (
              <NavigationItem
                key={item.id}
                {...item}
                setActive={setItemActive}
                isOpen={isOpen}
              />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
