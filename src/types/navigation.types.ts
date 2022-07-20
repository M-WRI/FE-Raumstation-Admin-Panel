import { TIconType } from "./icon.types";

export interface INavigationItem {
  id: string;
  label: string;
  path: string;
  icon: TIconType;
  isActive: boolean;
}

export interface INavigationContext {
  navigation: INavigationItem[];
  setNavigation: (data: INavigationItem[]) => void;
}

export interface INavigationProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface NavigationItemProps extends INavigationItem {
  setActive: (id: string) => void;
  isOpen?: boolean;
}
