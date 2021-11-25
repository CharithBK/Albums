import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AlbumDetailsScreen, {
  screenOptions as albumDetailsScreen,
} from '../screens/AlbumDetails';
import UserDetailsScreen, {
  screenOptions as userDetailsScreen,
} from '../screens/UserDetails';

const AppStackNavigator = createStackNavigator();
export const AppDetailsNavigator = () => {
  return (
    <AppStackNavigator.Navigator>
      <AppStackNavigator.Screen
        name="AlbumDetailsScreen"
        component={AlbumDetailsScreen}
        options={albumDetailsScreen}
      />
      <AppStackNavigator.Screen
        name="UserDetailsScreen"
        component={UserDetailsScreen}
        options={userDetailsScreen}
      />
    </AppStackNavigator.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppDetailsNavigator />
    </NavigationContainer>
  );
};
export default AppNavigator;
