// TYPES
import { ICardProps } from "../types/card.types";
// STYLES
import styles from "../styles/Card.module.scss";

export const Card = ({ children }: ICardProps): JSX.Element => {
  return <div className={styles.container}>{children}</div>;
};
