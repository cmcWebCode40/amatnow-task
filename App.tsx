import { StatusBar } from 'expo-status-bar';
import React from 'react';

import RootNavigation from './navigations/RootNavigation';

const App: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <StatusBar style='auto' />
      <RootNavigation />
    </React.Fragment>
  );
};

export default App;
