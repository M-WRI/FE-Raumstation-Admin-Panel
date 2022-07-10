// TYPES
import { IIconProps, TIconType } from "../types/icon.types";

// Styles
import styles from "../styles/Icon.module.scss";

// ICONS
import dashboard from "../img/icons/dashboard_icon.svg";
import user from "../img/icons/user_icon.svg";
import blog from "../img/icons/blog_icon.svg";
import solution from "../img/icons/solution_icon.svg";
import service from "../img/icons/service_icon.svg";
import floor from "../img/icons/floor_icon.svg";
import bandRoom from "../img/icons/band_room_icon.svg";
import conference from "../img/icons/conference_icon.svg";
import message from "../img/icons/message_icon.svg";
import openToggle from "../img/icons/open_toggle_icon.svg";

export const Icon = ({ type }: IIconProps): JSX.Element => {
  const iconSwitch = (type: TIconType) => {
    switch (type) {
      case "open_toggle_icon":
        return openToggle;
      case "dashboard_icon":
        return dashboard;
      case "blog_icon":
        return blog;
      case "user_icon":
        return user;
      case "solution_icon":
        return solution;
      case "service_icon":
        return service;
      case "floor_icon":
        return floor;
      case "band_room_icon":
        return bandRoom;
      case "conference_icon":
        return conference;
      case "message_icon":
        return message;
      default:
        return user;
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
