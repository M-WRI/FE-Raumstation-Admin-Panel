// Components
import { Icon } from "./Icon.component";
// Types
import { NavigationItemProps } from "../types/navigation.types";
// Styles
import styles from "../styles/NavigationItem.module.scss";

export const NavigationItem = ({
  id,
  path,
  label,
  icon,
  isActive,
  setActive,
  isOpen,
}: NavigationItemProps): JSX.Element => {
  return (
    <li
      className={`${styles.navigationItemContainer} ${
        isActive && styles.active
      } ${isOpen ? styles.openMenu : styles.closeMenu}`}
      onClick={() => setActive(id)}
    >
      <Icon type={icon} />
      <span className={styles.navigationLabel}>{label}</span>
    </li>
  );
};
