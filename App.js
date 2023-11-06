
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MyDrawer from './src/components/Drawer';




const App = () => {
  
  return (
   <GestureHandlerRootView style={{ flex: 1 }}>
   <NavigationContainer>
    <MyDrawer/>
   </NavigationContainer>
   </GestureHandlerRootView>
  );
};

export default App;
