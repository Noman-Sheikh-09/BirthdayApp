import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AddScreen from '../screens/addScreen/AddScreen';
import Home from '../screens/home/Home';
export default function StackNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}} >
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Add Birthday" component={AddScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
