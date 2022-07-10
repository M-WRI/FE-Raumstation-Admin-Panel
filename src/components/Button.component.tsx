import { Headline } from "./Headline.component";

import styles from "../styles/Button.module.scss";
import { IButtonProps } from "../types/button.types";

export const Button = ({
  children,
  type = "S",
  signal = false,
}: IButtonProps) => {
  const buttonSwitch = (
    children: JSX.Element | string,
    type: string,
    signal: boolean
  ) => {
    switch (type) {
      case "L":
        return (
          <button className={`${styles.buttonLarge}`}>
            <Headline type="h2">{children}</Headline>
          </button>
        );
      case "S":
        return (
          <button className={`${styles.buttonSmall}`}>
            <Headline type="h3">{children}</Headline>
          </button>
        );
      default:
        return (
          <button className={`${styles.buttonSmall}`}>
            <Headline type="h3">{children}</Headline>
          </button>
        );
    }
  };
  return buttonSwitch(children, type, signal);
};
