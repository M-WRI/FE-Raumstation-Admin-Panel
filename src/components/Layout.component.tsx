// TYPES
import { ILayoutProps } from "../types/layout.types";
import { Navigation } from "./Navigation.component";
// STYLES
import styles from "../styles/Layout.module.scss";
import { NavigationProvider } from "../context/NavigationContext";
import { HeadConsole } from "./HeadConsole.component";

export const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <div className={styles.layoutContainer}>
      <NavigationProvider>
        <>
          <HeadConsole />
          <Navigation />
        </>
      </NavigationProvider>
      {/* <main>{children}</main> */}
    </div>
  );
};
