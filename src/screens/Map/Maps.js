import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import {Icon} from '@rneui/themed';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Maps = (props) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <Header leftComponent ={(
        <View>
          <TouchableOpacity style={{marginTop:5}} onPress={()=>props.navigation.goBack()}>
            <Icon  name="chevron-left" color={"white"}/>
          </TouchableOpacity>
        </View>

      )} />
      <View style={{...styles.gridRow, flexDirection: 'row'}}>
        <Text style={{fontSize:20}}>
            MAPS
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gridRow: {
    flex: 1,
    height: windowHeight,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
});

export default Maps;