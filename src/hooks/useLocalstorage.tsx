import { useCallback, useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(() => {
    const valueInStorage = localStorage.getItem(key);

    return valueInStorage ? JSON.parse(valueInStorage) : initialValue;
  });

  const setValue = useCallback(
    (value: T) => {
      try {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    },
    [key],
  );

  return {
    value: state,
    setValue,
  };
}

export { useLocalStorage };
