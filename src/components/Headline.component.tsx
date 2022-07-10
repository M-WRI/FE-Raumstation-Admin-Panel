// TYPES
import { IHeadlineProps } from "../types/headline.types";
// STYLES
import styles from "../styles/Headline.module.scss";

export const Headline = ({ children, type }: IHeadlineProps) => {
  const headlineSwitcher = (children: JSX.Element | string, type: string) => {
    switch (type) {
      case "h1":
        return <h1 className={styles.mainHead}>{children}</h1>;
      case "h2":
        return <h2 className={styles.secondaryHead}>{children}</h2>;
      case "h3":
        return <h3 className={styles.tertiaryHead}>{children}</h3>;
      default:
        return <h2 className={styles.secondaryHead}>{children}</h2>;
    }
  };

  return headlineSwitcher(children, type);
};
