import React, { createContext, useCallback, useMemo, useEffect } from 'react';

import AlertModal from '../components/AlertModal';
import {
  CloseModalCallback,
  ToggleLoadingCallback,
} from '../components/AlertModal/AlertModal';
import { useModal } from '../hooks/useModal';

type ShowAlertData = {
  title: string;
  message: string;
  closeText?: string;
  confirmAction?(
    closeModal: CloseModalCallback,
    toggleLoading: ToggleLoadingCallback,
  ): void;
  cancelAction?(
    closeModal: CloseModalCallback,
    toggleLoading: ToggleLoadingCallback,
  ): void;
};

interface AlertContextData {
  showAlert(data: ShowAlertData): void;
}

interface AlertProviderProps {
  children: React.ReactNode;
}

export const AlertContext = createContext<AlertContextData>(
  {} as AlertContextData,
);

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const { isOpen, data, setData, toggleModal } = useModal<ShowAlertData>();

  const showAlert = useCallback(
    (data: ShowAlertData) => {
      setData(data);
      toggleModal();
    },
    [setData, toggleModal],
  );

  const contextValue = useMemo(
    () => ({
      showAlert,
    }),
    [showAlert],
  );

  useEffect(() => {
    if (!isOpen) {
      setData(null);
    }
  }, [setData, isOpen]);

  return (
    <AlertContext.Provider value={contextValue}>
      {children}
      <AlertModal
        isOpen={isOpen}
        title={data?.title}
        message={data?.message}
        closeText={data?.closeText}
        setIsOpen={toggleModal}
        confirmAction={data?.confirmAction}
        cancelAction={data?.cancelAction}
      />
    </AlertContext.Provider>
  );
};
