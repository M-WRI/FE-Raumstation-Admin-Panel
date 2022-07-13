// TYPES
import { IViewsProps } from "../types/view.types";
// STYLES
import styles from "../styles/ViewContainer.module.scss"

export const ViewContainer = ({ children }: IViewsProps): JSX.Element => {
  return <main className={styles.viewsContainer}>{children}</main>;
};
