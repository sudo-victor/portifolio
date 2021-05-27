import { createContext, ReactNode, useContext, useState } from "react";

type HeaderData = {
  activatedNav: boolean;
  current: string;
  toggleNav: () => void;
  handleClickLink: (text: string) => void;
}

type HeaderProviderProps = {
  children: ReactNode;
}

const HeaderContext = createContext({} as HeaderData);

export function HeaderProvider({children}: HeaderProviderProps) {
  const [activatedNav, setActivatedNav] = useState(false);
  const [current, setCurrent] = useState("home");

  function toggleNav() {
    setActivatedNav(!activatedNav);
  }

  function handleClickLink(text: string) {
    setCurrent(text);
  }

  return (
    <HeaderContext.Provider
      value={{
        activatedNav,
        current,
        toggleNav,
        handleClickLink
      }}
    >
      {children}
    </HeaderContext.Provider>
  )
}

export const useHeader = () => {
  return useContext(HeaderContext)
}