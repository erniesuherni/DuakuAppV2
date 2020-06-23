import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DuasList from '../screens/DuasList';
import DuasDetails from '../screens/DuasDetails';
import Prayer from '../screens/Prayer';

const DuasStack = createStackNavigator();
const DuasStackScreen = () => (
  <DuasStack.Navigator>
    <DuasStack.Screen name="DuasList" component={DuasList} options={{headerTitle: 'Dua List'}} />
    <DuasStack.Screen name="DuasDetails" component={DuasDetails} options={({ route }) => {
      return {
        headerTitle: `${route.params.dua.title}`,
      };
    }} 
    />
  </DuasStack.Navigator>
);

const PrayerStack = createStackNavigator();
const PrayerStackScreen = () => (
<PrayerStack.Navigator>
  <PrayerStackScreen.Screen name = "Prayer" component = {Prayer} />
</PrayerStack.Navigator>
);

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
<AppTabs.Navigator>
  <AppTabs.Screen name = "Dua" component = {DuasStackScreen} />
  <AppTabs.Screen name = "Prayer" component = {PrayerStackScreen} />
</AppTabs.Navigator>
);


export default () => (
  <NavigationContainer>
    <AppTabsScreen />
  </NavigationContainer>
);