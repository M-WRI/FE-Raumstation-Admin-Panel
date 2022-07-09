// Components
import { Icon } from "./Icon.component";
// Types
import { INavigationItems } from "../types/navigation.types";
// Styles
import styles from "../styles/NavigationItem.module.scss";

export const NavigationItem = ({
  id,
  path,
  label,
  icon,
  isActive,
}: INavigationItems): JSX.Element => {
  return (
    <li className={styles.navigationItemContainer}>
      <Icon type={icon} />
      <span className={styles.navigationLabel}>{label}</span>
    </li>
  );
};
