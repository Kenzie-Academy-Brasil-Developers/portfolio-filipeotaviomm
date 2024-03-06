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

      // console.log(projectsOffset);
      // console.log(currentPosition);
      // console.log(contactsOffset);

      if (currentPosition >= homeOffset && currentPosition < aboutOffset) {
        setCurrentMenu("home");
      } else if (
        currentPosition >= aboutOffset &&
        currentPosition < projectsOffset - 1
      ) {
        setCurrentMenu("aboutMe");
      } else if (
        currentPosition + 1 >= projectsOffset &&
        currentPosition < contactsOffset - 1
      ) {
        setCurrentMenu("projects");
      } else if (
        currentPosition + 1 >= contactsOffset &&
        currentPosition < socialMediasOffset
      ) {
        setCurrentMenu("contacts");
      } else if (currentPosition >= socialMediasOffset) {
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
