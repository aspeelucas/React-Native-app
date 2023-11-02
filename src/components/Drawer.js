import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Profile from '../screens/Profile/Profile';
import Home from '../screens/Home';
import AppStack from '../routes/index';
import DrawerMenu from './DrawerMenu';
import List from '../screens/Lists/List';
import Maps from '../screens/Map/Maps';
import ListDetail from '../screens/Lists/listDetail';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
 
  return (

    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={AppStack} options={{ headerShown: false }}/>
      <Drawer.Screen name="Profile" component={Profile}  options={{ headerShown: false }}/>
      <Drawer.Screen name="List" component={List} options={{ headerShown: false }}/>
      <Drawer.Screen name="Maps" component={Maps} options={{ headerShown: false }}/>
      <Drawer.Screen name="ListDetail" component={ListDetail} options={{ headerShown: false }}/>
    </Drawer.Navigator>



    // <Drawer.Navigator
    //   initialRouteName="StackScreens"
    //   screenOptions={{
    //     headerShown: false,
    //   }}
    //   drawerContent={DrawerMenu}>
    //   <Drawer.Screen
    //     name="StackScreens"
    //     component={AppStack}
    //   />
    // </Drawer.Navigator>
  );
}

