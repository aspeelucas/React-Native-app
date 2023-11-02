import React,{ Component } from 'react';
import List from '../screens/Lists/List'
import ListDetail from '../screens/Lists/listDetail'

import { createStackNavigator } from '@react-navigation/stack';



const ListsStack = createStackNavigator();


export const ListsStackScreen = () => {
return(
<ListsStack.Navigator screenOptions={{headerShown: false}}>
<ListsStack.Screen name="Lists" component={List} />
<ListsStack.Screen name="ListDetail" component={ListDetail} />
</ListsStack.Navigator>
)
}