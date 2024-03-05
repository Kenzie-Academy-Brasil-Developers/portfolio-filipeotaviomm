import { ReactNode, Dispatch, SetStateAction } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface IProject {
  id: number;
  name: string;
  photo: string;
  stack: string;
  techs: string[];
  gitHub: string;
  vercel: string;
}

export interface IMainContext {
  language: string | undefined;
  setLanguage: Dispatch<SetStateAction<string | undefined>>;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  projectsList: IProject[];
  setProjectsList: Dispatch<SetStateAction<IProject[]>>;
  fromMenuToElement: (id: string) => void;
  currentMenu: string;
  setCurrentMenu: Dispatch<SetStateAction<string>>;
}
