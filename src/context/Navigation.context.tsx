import { createContext, useState } from "react";
import {
  INavigationContext,
  IProviderChildren,
  INavigation,
} from "../types/navigation.types";
import { navigationItems } from "../data/navigation.data";

export const NavigationContext = createContext<INavigationContext | null>(null);

export const NavigationProvider = ({ children }: IProviderChildren) => {
  const [navigation, setNavigation] = useState<INavigation>({
    isNavbarOpen: false,
    navigationItems: navigationItems,
  });
  return (
    <NavigationContext.Provider value={{ navigation, setNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
};
