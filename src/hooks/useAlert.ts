import { useContext } from 'react';
import { AlertContext } from '../contexts/alert.context';

export function useAlert() {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error('useAlert must be user within a AlertProvider !');
  }

  return context;
}
