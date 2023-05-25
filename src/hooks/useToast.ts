import { useContext } from 'react';
import { IToastContextData, ToastContext } from '../contexts/toast.context';

function useToast(): IToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be user within a ToastProvider !');
  }

  return context;
}

export { useToast };
