// TYPES
import { IHeadlineProps } from "../types/headline.types";
// STYLES
import styles from "../styles/Headline.module.scss";

export const Headline = ({
  children,
  type,
  center = false,
}: IHeadlineProps) => {
  const headlineSwitcher = (children: JSX.Element | string, type: string) => {
    switch (type) {
      case "h1":
        return (
          <h1
            className={`${styles.mainHead} ${center ? styles.textCenter : ""}`}
          >
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2
            className={`${styles.secondaryHead} ${
              center ? styles.textCenter : ""
            }`}
          >
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3
            className={`${styles.tertiaryHead} ${
              center ? styles.textCenter : ""
            }`}
          >
            {children}
          </h3>
        );
      default:
        return (
          <h2
            className={`${styles.secondaryHead} ${
              center ? styles.textCenter : ""
            }`}
          >
            {children}
          </h2>
        );
    }
  };

  return headlineSwitcher(children, type);
};
