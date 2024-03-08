"use client";

import { IChildren, IMainContext, IProject } from "@/types/types";
import { projectsData } from "@/utils/data";
import { createContext, useContext, useEffect, useState } from "react";

export const MainContext = createContext<IMainContext>({} as IMainContext);

export const MainProvider = ({ children }: IChildren) => {
  const [language, setLanguage] = useState<string | undefined>(undefined);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [projectsList, setProjectsList] = useState<IProject[]>(projectsData);
  const [currentMenu, setCurrentMenu] = useState<string>("home");

  const fromMenuToElement = (href: string) => {
    // setCurrentMenu(href); //tendo o efeito de rolagem é melhor não fazer isso ao clicar
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      //essa forma abaixo desconstroi o offsetTop e dá um nome pra ele, é como se fosse nomeDaVariavel.offsetTop
      const { offsetTop: homeOffset } = document.getElementById("home")!;
      const { offsetTop: aboutOffset } = document.getElementById("aboutMe")!;
      const { offsetTop: projectsOffset } =
        document.getElementById("projects")!;
      const { offsetTop: contactsOffset } =
        document.getElementById("contacts")!;
      const { offsetTop: socialMediasOffset } =
        document.getElementById("socialMedias")!;

      const currentPosition = window.scrollY;

      if (
        currentPosition >= homeOffset &&
        currentPosition < aboutOffset - 100
      ) {
        setCurrentMenu("home");
      } else if (
        currentPosition >= aboutOffset - 100 &&
        currentPosition < projectsOffset - 100
      ) {
        setCurrentMenu("aboutMe");
      } else if (
        currentPosition >= projectsOffset - 100 &&
        currentPosition < contactsOffset - 100
      ) {
        setCurrentMenu("projects");
      } else if (
        currentPosition >= contactsOffset - 100 &&
        currentPosition < socialMediasOffset - 200
      ) {
        setCurrentMenu("contacts");
      } else {
        setCurrentMenu("socialMedias");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
