// TYPES
import { IIconProps, TIconType } from "../types/icon.types";

// Styles
import styles from "../styles/Icon.module.scss";

// IMG
import dashboard from "../img/icons/dashboard_icon.svg";
import createUser from "../img/icons/create_user_icon.svg";
import blog from "../img/icons/blog_icon.svg";
import solution from "../img/icons/solution_icon.svg";
import service from "../img/icons/service_icon.svg";
import floor from "../img/icons/floor_icon.svg";
import bandRoom from "../img/icons/band_room_icon.svg";

export const Icon = ({ type }: IIconProps): JSX.Element => {
  const iconSwitch = (type: TIconType) => {
    switch (type) {
      case "dashboard_icon":
        return dashboard;
      case "blog_icon":
        return blog;
      case "create_user_icon":
        return createUser;
      case "solution_icon":
        return solution;
      case "service_icon":
        return service;
      case "floor_icon":
        return floor;
      case "band_room_icon":
        return bandRoom;
      default:
        return createUser;
    }
  };
  return (
    <div className={styles.iconContainer}>
      <img
        className={styles.iconImage}
        src={iconSwitch(type)}
        alt={iconSwitch(type)}
      />
    </div>
  );
};
