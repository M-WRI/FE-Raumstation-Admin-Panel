import { createContext, useState } from "react";
import { navigationItems } from "../api/navigation.data";
import {
  INavigationContext,
  INavigationProviderProps,
  INavigationItem,
} from "../types/navigation.types";

const initialValue: INavigationContext = {
  navigation: navigationItems,
  setNavigation: (data: any) => {},
};

export const NavigationContext = createContext(initialValue);

export const NavigationProvider = ({ children }: INavigationProviderProps) => {
  const [navigation, setNavigation] =
    useState<INavigationItem[]>(navigationItems);

  return (
    <NavigationContext.Provider value={{ navigation, setNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
};
