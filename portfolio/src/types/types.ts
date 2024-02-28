import { ReactNode, Dispatch, SetStateAction } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface IMainContext {
  language: string | undefined;
  setLanguage: Dispatch<SetStateAction<string | undefined>>;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}
