import React, { createContext, useCallback, useState, useMemo } from 'react';

import api from '../services/api';
import { History, PlayerMode } from '../types';

interface ISignInCredentials {
  nickname: string;
  password: string;
}

type PlayerUser = {
  _id: string;
  nickname: string;
};

interface IAuthResponse {
  user: PlayerUser;
  historyOfGames: History[];
  token: string;
}

export interface PlayerContextData {
  player: PlayerUser;
  historyOfGames: History[];
  isLogged: boolean;
  mode: PlayerMode;
  setMode(mode: PlayerMode): void;
  signIn(credentials: ISignInCredentials): Promise<PlayerUser>;
  signOut(): void;
}

export const PlayerContext = createContext<PlayerContextData>(
  {} as PlayerContextData,
);

interface IAuthState {
  token: string;
  player: {
    _id: string;
    nickname: string;
  };
  historyOfGames: History[];
}

interface PlayerProviderProps {
  children: React.ReactNode;
}

const PlayerProvider = ({ children }: PlayerProviderProps) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@dlearn-player:token');
    const user = localStorage.getItem('@dlearn-player:user');
    const history = localStorage.getItem('@dlearn-player:history');

    if (token && user && history) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const parsedUser = JSON.parse(user);
      const parsedHistory = JSON.parse(history);

      return {
        token,
        player: parsedUser,
        historyOfGames: parsedHistory,
      };
    }

    return {} as IAuthState;
  });

  const [mode, setMode] = useState<PlayerMode>(() => {
    if (data.player) {
      return PlayerMode.Ok;
    }

    return PlayerMode.NoChoosen;
  });

  const signIn = useCallback(
    async ({ nickname, password }: ISignInCredentials) => {
      const response = await api.post<IAuthResponse>('/players/session', {
        nickname,
        password,
      });

      const { token, user, historyOfGames } = response.data;

      localStorage.setItem('@dlearn-player:token', token);
      localStorage.setItem('@dlearn-player:user', JSON.stringify(user));
      localStorage.setItem(
        '@dlearn-player:history',
        JSON.stringify(historyOfGames),
      );

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, player: user, historyOfGames });

      return user;
    },
    [],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@dlearn-player:token');
    localStorage.removeItem('@dlearn-player:user');
    localStorage.removeItem('@dlearn-player:history');

    setData({} as IAuthState);
    setMode(PlayerMode.NoChoosen);
  }, []);

  const contextValue = useMemo(
    () => ({
      player: data.player,
      isLogged: !!data.player,
      historyOfGames: data.historyOfGames,
      mode,
      setMode,
      signIn,
      signOut,
    }),
    [data, mode, setMode, signIn, signOut],
  );

  // useEffect(() => {
  //   if (data.player) {
  //     setMode(PlayerMode.Ok);
  //   }
  // }, [data]);

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerProvider };
