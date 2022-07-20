// COMPONENTS
import { Calendar } from "./Calendar.component";
// STYLES
import styles from "../styles/DatePicker.module.scss";

export const DatePicker: React.FC<{}> = (): JSX.Element => {
  return (
    <div className={styles.DatePickerContainer}>
      <div className={styles.backgroundContainer}></div>
      <Calendar />
    </div>
  );
};
