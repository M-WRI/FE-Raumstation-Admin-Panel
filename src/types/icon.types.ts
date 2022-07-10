export interface IIconProps {
  type: TIconType;
}

export type TIconType =
  | "dashboard_icon"
  | "user_icon"
  | "blog_icon"
  | "solution_icon"
  | "service_icon"
  | "floor_icon"
  | "conference_icon"
  | "band_room_icon"
  | "message_icon"
  | "toggle"
  | "open_toggle_icon"
  | "astronaut_icon";
