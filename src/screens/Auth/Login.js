import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native';
import Header from '../../components/Header';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={{...styles.gridRow, flexDirection: 'row'}}>
        <Text style={{fontSize:20}}>
            LOGIN
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

export default Login;