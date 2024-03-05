"use client";

import { IChildren, IMainContext, IProject } from "@/types/types";
import { projectsData } from "@/utils/data";
import { createContext, useContext, useState } from "react";

export const MainContext = createContext<IMainContext>({} as IMainContext);

export const MainProvider = ({ children }: IChildren) => {
  const [language, setLanguage] = useState<string | undefined>(undefined);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [projectsList, setProjectsList] = useState<IProject[]>(projectsData);
  const [currentMenu, setCurrentMenu] = useState<string>("home");

  const fromMenuToElement = (href: string) => {
    setCurrentMenu(href);
    setIsMenuOpen(false);
  };

  return (
    <MainContext.Provider
      value={{
        language,
        setLanguage,
        isMenuOpen,
        setIsMenuOpen,
        projectsList,
        setProjectsList,
        fromMenuToElement,
        currentMenu,
        setCurrentMenu,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

//hook
export const useMainContext = () => useContext(MainContext);
