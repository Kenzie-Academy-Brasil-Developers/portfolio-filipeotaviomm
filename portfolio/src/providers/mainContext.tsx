import { IChildren, IMainContext } from "@/types/types";
import { useRouter } from "next/navigation";
import { createContext, useContext } from "react";

const MainContext = createContext<IMainContext>({} as IMainContext);

export const MainProvider = ({ children }: IChildren) => {
  const router = useRouter();

  return <MainContext.Provider value={{}}>{children}</MainContext.Provider>;
};

//hook
export const useMainContext = () => useContext(MainContext);
