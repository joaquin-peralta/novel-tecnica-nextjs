import { createContext } from 'react';

export type SidebarContent = {
  show: boolean;
  toggle: () => void;
};

export const SidebarContext = createContext<SidebarContent>({
  show: false,
  toggle: () => {},
});
