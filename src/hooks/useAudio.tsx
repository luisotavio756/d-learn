import { useMemo } from 'react';

export function useAudio(url: string) {
  const audio = useMemo(() => new Audio(`src/assets/sounds/${url}`), [url]);

  return { audio };
}
