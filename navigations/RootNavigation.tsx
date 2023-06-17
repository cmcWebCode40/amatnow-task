import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { HOME_SCREEN, SIGNIN_SCREEN } from '../libs/constants';
import { RootNavigationScreens } from '../libs/types';
import { HomeScreen, SignInScreen } from '../screens';

const Stack = createNativeStackNavigator<RootNavigationScreens>();

const RootNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name={SIGNIN_SCREEN} component={SignInScreen} />
          <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigation;
