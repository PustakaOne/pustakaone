'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  AuthContextInterface,
  AuthContextProviderProps,
  UserInterface,
} from './interface';
import { getCookie } from 'cookies-next';

const AuthContext = createContext({} as AuthContextInterface);

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<UserInterface | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function getUser() {
    const user = getCookie('user');
    if (user === null) {
      setIsAuthenticated(false);
      setUser(null);
    } else {
      setUser(JSON.parse(user as any));
      setIsAuthenticated(true);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const contextValue = {
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
