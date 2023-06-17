/* eslint-disable @typescript-eslint/no-empty-function */
import axios from 'axios';
import React, { createContext, useCallback, useEffect, useState } from 'react';

import config from './config';
import { AUTH_TOKEN } from './constants';
import { LoginAuthFields } from './types';
import {
  deleteFromSecureStore,
  errorHandler,
  getFromSecureStore,
  saveToSecureStore,
} from './utils';

type DefaultContext = {
  isLoading: boolean;
  error: string | undefined;
  login: (data: LoginAuthFields) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
};

type AuthContextProvider = {
  children: React.ReactNode;
};

export const AuthContext = createContext<DefaultContext>({
  logout: async () => {},
  login: async () => {},
  error: undefined,
  isLoading: false,
  isAuthenticated: false,
});

const headers = {
  Accept: 'application/json',
};

export const AuthContextProvider: React.FunctionComponent<
  AuthContextProvider
> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const authToken = await getFromSecureStore(AUTH_TOKEN);
        if (!authToken) {
          return;
        }
        setIsAuthenticated(true);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const login = useCallback(async (data: LoginAuthFields) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${config.baseApi}/auth/login`, data, {
        headers,
      });
      await saveToSecureStore(AUTH_TOKEN, response.data.access_token);
      // setIsLoading(false);
      setIsAuthenticated(true);
      // console.log(response.data.access_token);
    } catch (error) {
      const errorMessage = errorHandler(error);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setIsLoading(true);
    try {
      await deleteFromSecureStore(AUTH_TOKEN);
      setIsAuthenticated(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const values = {
    login,
    error,
    isLoading,
    logout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
