// TYPES
import { IFromProps } from "../types/form.types";
// STYLES
import styles from "../styles/Form.module.scss";

export const Form = ({ children }: IFromProps) => {
  return <form className={styles.formContainer}>{children}</form>;
};
