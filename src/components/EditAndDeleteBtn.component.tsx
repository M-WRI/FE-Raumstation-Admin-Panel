// COMPONENTS
import { Icon } from "./Icon.component";
// TYPES
import {
  IEditAndDeleteProps,
  TEditAndDelete,
} from "../types/editAndDeleteBtn.types";
// STYLES
import styles from "../styles/EditAndDelete.module.scss";

export const EditAndDeleteBtn = ({ type }: IEditAndDeleteProps) => {
  const editOrDelete = (type: TEditAndDelete) => {
    switch (type) {
      case "edit":
        return <Icon type="astronaut_icon" />;
      case "delete":
        return <Icon type="astronaut_icon" />;
    }
  };

  const button = editOrDelete(type);

  return <div className={styles.container}>{button}</div>;
};
