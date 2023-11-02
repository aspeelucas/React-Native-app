import React,{ Component } from 'react';
import Maps from '../screens/Map/Maps';


import { createStackNavigator } from '@react-navigation/stack';



const MapStack = createStackNavigator();


export const MapStackScreen = () => {
return(
<MapStack.Navigator screenOptions={{headerShown: false}}>
<MapStack.Screen name="Maps" component={Maps} />
</MapStack.Navigator>
)
}