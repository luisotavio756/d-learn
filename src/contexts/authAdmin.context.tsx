import React, { createContext, useCallback, useState, useMemo } from 'react';

import api from '../services/api';
import { User } from '../types';

interface ISignInCredentials {
  login: string;
  password: string;
}

interface IAuthResponse {
  name: string;
  login: string;
  token: string;
}

export interface AuthAdminContextData {
  user: User;
  isLogged: boolean;
  signIn(credentials: ISignInCredentials): Promise<User>;
  signOut(): void;
}

export const AuthAdminContext = createContext<AuthAdminContextData>(
  {} as AuthAdminContextData,
);

interface IAuthState {
  token: string;
  user: User;
}

interface AuthAdminProviderProps {
  children: React.ReactNode;
}

const AuthAdminProvider = ({ children }: AuthAdminProviderProps) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@dlearn:token');
    const user = localStorage.getItem('@dlearn:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const parsedUser = JSON.parse(user);

      return {
        token,
        user: parsedUser,
      };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(
    async ({ login, password }: ISignInCredentials) => {
      const response = await api.post<IAuthResponse>('/users/session', {
        login,
        password,
      });

      const { token, name } = response.data;

      const user = {
        name,
        login,
      };

      localStorage.setItem('@dlearn:token', token);
      localStorage.setItem('@dlearn:user', JSON.stringify(user));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, user });

      return user;
    },
    [],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@dlearn:token');
    localStorage.removeItem('@dlearn:user');

    setData({} as IAuthState);
  }, []);

  const contextValue = useMemo(
    () => ({
      user: data.user,
      isLogged: !!data.user,
      signIn,
      signOut,
    }),
    [data.user, signIn, signOut],
  );

  return (
    <AuthAdminContext.Provider value={contextValue}>
      {children}
    </AuthAdminContext.Provider>
  );
};

export { AuthAdminProvider };
