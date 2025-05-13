import React from 'react';
import {NavigationContainer, NavigatorScreenParams} from '@react-navigation/native';
import MainNavigation, {MainNavigationParams} from './main-navigation.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParams = {
  MainNavigation: NavigatorScreenParams<MainNavigationParams>
}

const Stack = createNativeStackNavigator<RootStackParams>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainNavigation" component={MainNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
