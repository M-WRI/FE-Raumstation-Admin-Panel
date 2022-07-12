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
    children: JSX.Element | undefined,
    type: string,
    signal: boolean,
    text: string
  ) => {
    switch (type) {
      case "L":
        return (
          <button className={`${styles.buttonBase} ${styles.buttonLarge}`}>
            <div className={styles.buttonChildren}>{children}</div>
            <Headline type="h2">{text}</Headline>
          </button>
        );
      case "S":
        return (
          <button className={`${styles.buttonBase} ${styles.buttonSmall}`}>
            <div className={styles.buttonChildren}>{children}</div>
            <Headline type="h3">{text}</Headline>
          </button>
        );
      default:
        return (
          <button className={`${styles.buttonBase} ${styles.buttonSmall}`}>
            <div className={styles.buttonChildren}>{children}</div>
            <Headline type="h3">{text}</Headline>
          </button>
        );
    }
  };
  return buttonSwitch(children, type, signal, text);
};
