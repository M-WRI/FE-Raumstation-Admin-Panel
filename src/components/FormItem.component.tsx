// TYPES
import { IFormItem } from "../types/form.types";
// STYLES
import styles from "../styles/FormItem.module.scss";

export const FormItem = ({ type, name, title }: IFormItem) => {
  return (
    <div className={styles.formItemContainer}>
      <label className={styles.label} htmlFor={name}>
        {title}
      </label>
      <input className={styles.input} type={type} id={name} name={name} />
    </div>
  );
};
