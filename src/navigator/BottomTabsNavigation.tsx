import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';



const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigation: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="Settings" component={HomeScreen} />
    </BottomTabs.Navigator>
  );
};