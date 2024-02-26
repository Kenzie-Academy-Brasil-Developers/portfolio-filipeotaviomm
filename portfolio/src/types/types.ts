import { ReactNode, Dispatch, SetStateAction } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface IMainContext {
  language: string | undefined;
  setLanguage: Dispatch<SetStateAction<string | undefined>>;
}
