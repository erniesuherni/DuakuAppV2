import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DuasList from '../screens/DuasList';
import DuasDetails from '../screens/DuasDetails';
import AddDua from '../screens/AddDua';


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

const AddDuaStack = createStackNavigator();
const AddDuaStackScreen = () => (
<AddDuaStack.Navigator>
  <AddDuaStack.Screen name = "AddDua" component = {AddDua} />
 
</AddDuaStack.Navigator>
);

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
<AppTabs.Navigator>
  <AppTabs.Screen name = "Dua" component = {DuasStackScreen} />
  <AppTabs.Screen name = "AddDua" component = {AddDuaStackScreen} options = {{headerTitle: 'Add Dua'}} />
</AppTabs.Navigator>
);


export default () => (
  <NavigationContainer>
    <AppTabsScreen />
  </NavigationContainer>
);