import { ReactNode, createContext, useCallback, useState } from "react";

interface DashboardContextProps {
  areValuesVisible: boolean;
  isNewAccountModalOpen: boolean;
  toggleValuesVisibility(): void;
  openNewAccountModal(): void;
  closeNewAccountModal(): void;
}

export const DashboardContext = createContext({} as DashboardContextProps);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible(prevState => !prevState);
  }, []);

  const openNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true);
  }, []);

  const closeNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(false);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        isNewAccountModalOpen,
        toggleValuesVisibility,
        openNewAccountModal,
        closeNewAccountModal
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
