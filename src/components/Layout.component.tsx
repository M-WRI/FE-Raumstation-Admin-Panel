import styles from "../styles/Layout.module.scss";

// TYPES
import { ILayoutProps } from "../types/layout.types";
import { Navigation } from "./Navigation.component";

export const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <div className={styles.layoutContainer}>
      <Navigation />
      {/* <main>{children}</main> */}
    </div>
  );
};
