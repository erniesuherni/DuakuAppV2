import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DuasList from '../screens/DuasList';
import DuasDetails from '../screens/DuasDetails';

const DuasStack = createStackNavigator();
const DuasStackScreen = () => (
  <DuasStack.Navigator>
    <DuasStack.Screen name="DuasList" component={DuasList} />
    <DuasStack.Screen name="DuasDetails" component={DuasDetails} />
  </DuasStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <DuasStackScreen />
  </NavigationContainer>
);