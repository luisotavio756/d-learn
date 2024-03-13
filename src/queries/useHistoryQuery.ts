import { useQuery } from 'react-query';

import api from '../services/api';
import { History } from '../types';

async function getHistory() {
  const response = await api.get<History[]>(`/history`);

  return response.data;
}

export function useHistoryQuery() {
  return useQuery<History[]>('history', async () => getHistory(), {
    staleTime: 1000 * 60 * 30, // half hour,
  });
}
