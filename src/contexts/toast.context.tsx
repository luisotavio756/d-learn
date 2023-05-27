import React, { createContext, useCallback, useState, useMemo } from 'react';
import { v4 as uuid } from 'uuid';

import ToastContainer from '../components/ToastContainer';

export interface IToastContextData {
  addToast(message: Omit<IToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface IToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastContext = createContext<IToastContextData>(
  {} as IToastContextData,
);

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<IToastMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages(oldMessages => [...oldMessages, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  const contextValue = useMemo(
    () => ({
      addToast,
      removeToast,
    }),
    [addToast, removeToast],
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};
