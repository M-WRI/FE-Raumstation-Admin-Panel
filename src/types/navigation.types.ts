import { TIconType } from "./icon.types";

export interface INavigationItems {
  id: string;
  label: string;
  path: string;
  icon: TIconType;
  isActive: boolean;
}

export interface INavigation {
  isNavbarOpen: boolean;
  navigationItems: INavigationItems[];
}

export interface INavigationContext {
  navigation: INavigation;
  setNavigation: (data: INavigation) => void;
}

export interface IProviderChildren {
  children: JSX.Element;
}
