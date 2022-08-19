// Types
import { INavigationItem } from "../types/navigation.types";

export const navigationItems: INavigationItem[] = [
  {
    id: "1",
    label: "Dashboard",
    path: "dashboard",
    icon: "dashboard_icon",
    isActive: true,
  },
  { id: "2", label: "User", path: "#", icon: "user_icon", isActive: false },
  {
    id: "3",
    label: "Blog",
    path: "blog-posts",
    icon: "blog_icon",
    isActive: false,
  },
  {
    id: "4",
    label: "Lösungen",
    path: "solutions",
    icon: "solution_icon",
    isActive: false,
  },
  {
    id: "5",
    label: "Leistungen",
    path: "service",
    icon: "service_icon",
    isActive: false,
  },
  {
    id: "6",
    label: "Stockwärke",
    path: "floors",
    icon: "floor_icon",
    isActive: false,
  },
  {
    id: "7",
    label: "Konferenzraum",
    path: "book-conference-room",
    icon: "conference_icon",
    isActive: false,
  },
  {
    id: "8",
    label: "Proberaum",
    path: "book-band-room",
    icon: "band_room_icon",
    isActive: false,
  },
  {
    id: "9",
    label: "Nachrichten",
    path: "messages",
    icon: "message_icon",
    isActive: false,
  },
];
