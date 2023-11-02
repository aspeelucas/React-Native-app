import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import {Icon} from '@rneui/themed';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const List = (props) => {

  const handdlePressDetail = () => {
    props.navigation.navigate("ListDetail")
  }
  
  return (
    <SafeAreaView style={styles.container}>
       <Header leftComponent ={(
        <View>
          <TouchableOpacity style={{marginTop:5}} onPress={()=>props.navigation.goBack()}>
            <Icon  name="chevron-left" color={"white"}/>
          </TouchableOpacity>
        </View>

      )} />
      <View style={{...styles.gridRow, flexDirection: 'Column'}}>
        <Text style={{fontSize:20}}>
           List
        </Text>
        <Pressable style={{...styles.gridButtom}} onPress={handdlePressDetail}> 
          <Text style={{...styles.textoDetalle}}>Ir a Detalles</Text>
        </Pressable>
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
    gap: 30,
  },
 
  gridButtom: {
    backgroundColor: 'blue',
    width:100,
    height:100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoDetalle :{
    fontSize:20,
    color:'white',
    textAlign:'center'
  },
  
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
});

export default List;