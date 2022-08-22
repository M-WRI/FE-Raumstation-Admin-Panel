import { Headline } from "./Headline.component";

import styles from "../styles/Button.module.scss";
import { IButtonProps } from "../types/button.types";

export const Button = ({
  children,
  type = "S",
  signal = false,
  text,
}: IButtonProps) => {
  const buttonSwitch = (
    children: JSX.Element | string | undefined,
    type: string,
    signal: boolean,
    text: string
  ) => {
    console.log(signal);
    switch (type) {
      case "L":
        return (
          <button
            className={`${styles.buttonBase} ${styles.buttonLarge} ${
              signal ? styles.signal : ""
            }`}
          >
            {children && (
              <div className={styles.buttonChildren}>{children}</div>
            )}
            <Headline type="h2">{text}</Headline>
          </button>
        );
      case "S":
        return (
          <button
            className={`${styles.buttonBase} ${styles.buttonSmall} ${
              signal ? "signal" : ""
            }`}
          >
            {children && (
              <div className={styles.buttonChildren}>{children}</div>
            )}
            <Headline type="h3">{text}</Headline>
          </button>
        );
      default:
        return (
          <button
            className={`${styles.buttonBase} ${styles.buttonSmall} ${
              signal ? "signal" : ""
            }`}
          >
            {children && (
              <div className={styles.buttonChildren}>{children}</div>
            )}
            <Headline type="h3">{text}</Headline>
          </button>
        );
    }
  };
  return buttonSwitch(children, type, signal, text);
};
