import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const DrawerMenu = (props) => {
    const navigation = useNavigation()
    return (
        <DrawerContentScrollView {...props}>
        <Text
          style={{
            width: '90%',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 24,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 5,
            paddingBottom: 10,
            borderBottomWidth: 1
          }}>
          TODo
        </Text>
        <DrawerItem onPress={()=>{navigation.navigate('Lists', {},NavigationActions.navigate())}}
          label={() => (
            <Text style={{}}>
              {'ROKI SE LA COME'}
            </Text>
          )}
        />
         
         <DrawerItem
            label={() => (
              <Text style={{}}>
                {'JORGITO2'}
              </Text>
            )}
            
           
          />
        
      </DrawerContentScrollView>
    );
  };
    

const styles = StyleSheet.create({})

export default DrawerMenu;

