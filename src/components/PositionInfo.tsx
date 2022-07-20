// TYPES
import { IPositionInfoProps } from "../types/positionInfo.types";
// STYLES
import styles from "../styles/PositionInfo.module.scss";

export const PositionInfo = ({ children }: IPositionInfoProps) => {
  return <div className={styles.infoContainer}>{children}</div>;
};
