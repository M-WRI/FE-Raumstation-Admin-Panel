// STYLES
import styles from "../styles/Card.module.scss";
import { ICardProps } from "../types/card.types";

export const Card = ({ children }: ICardProps): JSX.Element => {
  return <div className={styles.cardContainer}>{children}</div>;
};
