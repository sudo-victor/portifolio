import { createContext, ReactNode, useState, useContext } from "react"

type ModalSkillProps = {
  children: ReactNode;
}

type Content = {
  name: string;
  about: string;
  color: string;
}

type ModalContextData = {
  isActivated: Boolean;
  toggleModal: () => void;
  content: Content;
  setContent: (state: Content) => void;
}

const ModalContext = createContext({} as ModalContextData);

export function ModalSkillProvider({ children }: ModalSkillProps) {
  const [isActivated, setIsActivated] = useState(false);
  const [content, setContent] = useState<Content>({} as Content);

  function toggleModal() {
    setIsActivated(!isActivated);
  }

  return (
    <ModalContext.Provider
      value={{
        isActivated,
        toggleModal,
        content,
        setContent,
      }}
    >
      {children}
    </ModalContext.Provider>
  )

}

export const useModalSkill = () => {
  return useContext(ModalContext);
}