// TYPES
import { ITextProps } from "../types/text.types";
// STYLES
import styles from "../styles/Text.module.scss";

export const Text = ({ children, strong = false }: ITextProps): JSX.Element => {
  return (
    <p className={`${styles.textContainer} ${strong && styles.strong}`}>
      {children}
    </p>
  );
};
