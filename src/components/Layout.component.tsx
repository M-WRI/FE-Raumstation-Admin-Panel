// TYPES
import { ILayoutProps } from "../types/layout.types";
import { Navigation } from "./Navigation.component";
// STYLES
import styles from "../styles/Layout.module.scss";

export const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <div className={styles.layoutContainer}>
      <Navigation />
      {/* <main>{children}</main> */}
    </div>
  );
};
