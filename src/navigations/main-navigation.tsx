import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../scene/main-screen';
import DriverScreen from '../scene/driver-screen';

export type MainNavigationParams= {
  MainScreen: undefined;
  DriverScreen: { driverId: string };
}

const Stack = createNativeStackNavigator<MainNavigationParams>();


const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="MainScreen">
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="DriverScreen" component={DriverScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
