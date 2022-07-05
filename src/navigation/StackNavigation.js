import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AddScreen from '../screens/addScreen/AddScreen';
import WishScreen from '../screens/wishScreen/WishScreen'
import Home from '../screens/home/Home';
import EditScreen from '../screens/editScreen/EditScreen';
export default function StackNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}} >
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Add Birthday" component={AddScreen}  />
        <Stack.Screen name="Wish Birthday" component={WishScreen}  />
        <Stack.Screen name="Edit Birthday" component={EditScreen}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
