// TYPES
import { IIconProps, TIconType } from "../types/icon.types";

// Styles
import styles from "../styles/Icon.module.scss";

// ICONS
import { ReactComponent as DashboardIcon } from "../img/icons/dashboard_icon.svg";
import { ReactComponent as UserIcon } from "../img/icons/user_icon.svg";
import { ReactComponent as BlogIcon } from "../img/icons/blog_icon.svg";
import { ReactComponent as SolutionIcon } from "../img/icons/solution_icon.svg";
import { ReactComponent as ServiceIcon } from "../img/icons/service_icon.svg";
import { ReactComponent as FloorIcon } from "../img/icons/floor_icon.svg";
import { ReactComponent as BandRoomIcon } from "../img/icons/band_room_icon.svg";
import { ReactComponent as ConferenceIcon } from "../img/icons/conference_icon.svg";
import { ReactComponent as MessageIcon } from "../img/icons/message_icon.svg";
import { ReactComponent as OpenToggleIcon } from "../img/icons/open_toggle_icon.svg";
import { ReactComponent as AstronautIcon } from "../img/icons/astronaut_icon.svg";
import { ReactComponent as DeleteIcon } from "../img/icons/delete_icon.svg";
import { ReactComponent as EditIcon } from "../img/icons/edit_icon.svg";

export const Icon = ({ type }: IIconProps): JSX.Element => {
  const iconSwitch = (type: TIconType) => {
    switch (type) {
      case "open_toggle_icon":
        return <OpenToggleIcon />;
      case "dashboard_icon":
        return <DashboardIcon />;
      case "blog_icon":
        return <BlogIcon />;
      case "user_icon":
        return <UserIcon />;
      case "solution_icon":
        return <SolutionIcon />;
      case "service_icon":
        return <ServiceIcon />;
      case "floor_icon":
        return <FloorIcon />;
      case "band_room_icon":
        return <BandRoomIcon />;
      case "conference_icon":
        return <ConferenceIcon />;
      case "message_icon":
        return <MessageIcon />;
      case "astronaut_icon":
        return <AstronautIcon />;
      case "delete_icon":
        return <DeleteIcon />;
      case "edit_icon":
        return <EditIcon />;
    }
  };

  const icon = iconSwitch(type);

  return <div className={styles.iconContainer}>{icon}</div>;
};
