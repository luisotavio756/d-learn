import { useMemo } from 'react';

export function useAudio(url: string) {
  const audio = useMemo(() => {
    const parsedURL = new URL(`/src/assets/sounds/${url}`, import.meta.url)
      .href;

    return new Audio(parsedURL);
  }, [url]);

  return { audio };
}
