// COMPONENTS
import { Icon } from "./Icon.component";
// TYPES
import { IEditAndDeleteProps } from "../types/editAndDeleteBtn.types";
// STYLES
import styles from "../styles/EditAndDelete.module.scss";

export const EditAndDeleteBtn = ({ type }: IEditAndDeleteProps) => {
  return (
    <div className={styles.container}>
      <Icon type={`${type}_icon`} />
    </div>
  );
};
