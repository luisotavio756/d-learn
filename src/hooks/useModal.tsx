import { useCallback, useState } from 'react';

export function useModal<T>() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const toggleModal = useCallback(() => {
    setIsOpen(state => !state);
  }, []);

  return {
    isOpen,
    data,
    toggleModal,
    setData,
  };
}
