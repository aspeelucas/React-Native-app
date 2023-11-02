import React,{ Component } from 'react';
import { createMaterialBottomTabNavigator } from
'@react-navigation/material-bottom-tabs';
import { HomeStackScreen } from './HomeStack'
import { ProfileStackScreen } from './ProfileStack'
import { MapStackScreen } from './MapStacks'
import { ListsStackScreen } from './ListStack'
import { Icon } from '@rneui/themed'
// import { theme } from '../constants'
const Tab = createMaterialBottomTabNavigator();
 const  Tabs = () => {
// const { colors } = theme
return (


<Tab.Navigator

>
<Tab.Screen name="HomeTab" component={HomeStackScreen}
options={{
tabBarIcon: ({ color }) => (
<Icon name={'home'} type="font-awesome-5" size={20} color={color} />
),
}}
/>
<Tab.Screen name="ProfileTab" component={ProfileStackScreen}
options={{
tabBarIcon: ({ color }) => (
<Icon name={'user'} type="font-awesome-5" size={20} color={color} />
),
}}
/>
<Tab.Screen name="ListsTab" component={ListsStackScreen}
options={{
tabBarIcon: ({ color }) => (
<Icon name={'marker'} type="font-awesome-5" size={20} color={color} />
),
}}
/>
<Tab.Screen name="MapTab" component={MapStackScreen}
options={{
tabBarIcon: ({ color }) => (
<Icon name={'map'} type="font-awesome-5" size={20} color={color} />
),
}}
/>
</Tab.Navigator>
);
}
export default Tabs;