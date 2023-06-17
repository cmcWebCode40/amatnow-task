import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { AuthContextProvider } from './libs/AuthContext';
import RootNavigation from './navigations/RootNavigation';

const App: React.FunctionComponent = () => {
  return (
    <AuthContextProvider>
      <StatusBar style='auto' />
      <RootNavigation />
    </AuthContextProvider>
  );
};

export default App;
