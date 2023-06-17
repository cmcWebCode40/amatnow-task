import { useState } from 'react';

import config from './config';
import { LoginAuthFields } from './types';

const useAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const loginUser = async (data: LoginAuthFields) => {
    setIsLoading(true);
    try {
      await fetch(`${config.baseApi}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    loginUser,
  };
};

export default useAuth;
