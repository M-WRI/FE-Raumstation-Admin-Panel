// Types
import { INavigationItems } from "../types/navigation.types";

export const navigationItems: INavigationItems[] = [
  {
    id: "1",
    label: "Dashboard",
    path: "#",
    icon: "dashboard_icon",
    isActive: true,
  },
  { id: "2", label: "User", path: "#", icon: "user_icon", isActive: false },
  { id: "3", label: "Blog", path: "#", icon: "blog_icon", isActive: false },
  {
    id: "4",
    label: "Lösungen",
    path: "#",
    icon: "solution_icon",
    isActive: false,
  },
  {
    id: "5",
    label: "Leistungen",
    path: "#",
    icon: "service_icon",
    isActive: false,
  },
  {
    id: "6",
    label: "Stockwärke",
    path: "#",
    icon: "floor_icon",
    isActive: false,
  },
  {
    id: "7",
    label: "Konferenzraum",
    path: "#",
    icon: "conference_icon",
    isActive: false,
  },
  {
    id: "8",
    label: "Proberaum",
    path: "#",
    icon: "band_room_icon",
    isActive: false,
  },
  {
    id: "9",
    label: "Nachrichten",
    path: "#",
    icon: "message_icon",
    isActive: false,
  },
];
