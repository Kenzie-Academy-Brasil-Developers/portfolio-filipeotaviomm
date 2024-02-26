"use client";

import { IChildren, IMainContext } from "@/types/types";
// import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

export const MainContext = createContext<IMainContext>({} as IMainContext);

export const MainProvider = ({ children }: IChildren) => {
  // const router = useRouter();

  const [language, setLanguage] = useState<string | undefined>(undefined);

  return (
    <MainContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

//hook
export const useMainContext = () => useContext(MainContext);
