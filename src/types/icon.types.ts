export interface IIconProps {
  type: TIconType;
}

type TIconType =
  | "dashboard_icon"
  | "create_user_icon"
  | "blog_icon"
  | "user_icon"
  | "solution_icon"
  | "service_icon"
  | "floor_icon"
  | "conference_icon"
  | "band_room_icon";
