import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  useColorScheme,
  View,
  Alert,
  ImageBackground
} from 'react-native';
import Header from '../../components/Header';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = (props) => {


  const handlePressProfile = () => {
    props.navigation.navigate("ProfileTab")
  }

  const handlePressList = () => {
    props.navigation.navigate("ListsTab")
  }

  const handlePressMaps= () => {
    props.navigation.navigate("MapTab")
  }
  const backgroundimg = {uri:"https://img.freepik.com/vector-gratis/fondo-abstracto-negro-azul_1340-17010.jpg"}

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundimg} resizeMode={'cover'} style={{...styles.imageBack}}> 
      <Header />
      <View style={{...styles.gridRow, flexDirection: 'row'}}>
        <View style={{...styles.gridColumn, justifyContent:'flex-end'}}>
          <TouchableOpacity style={{...styles.gridButtom, marginBottom:20, backgroundColor: '#5C87A2'}} onPress={()=>{
            Alert.alert(
              'Aviso',
              'Ya te encuentras en Home',
              [
                {text: 'OK'},
              ],
              {cancelable: true},
            );
          }} >
            <Text style={{...styles.fontButtomTittle}}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={{...styles.gridColumn,justifyContent:'flex-end'}}>
          <TouchableOpacity style={{...styles.gridButtom,marginBottom:20, backgroundColor: '#5C87A2'}} onPress={handlePressList}>
            <Text  style={{...styles.fontButtomTittle}}>List</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{...styles.gridRow, flexDirection: 'row'}}>
        <View style={{...styles.gridColumn}}>
          <TouchableOpacity style={{...styles.gridButtom,marginTop:20, backgroundColor: '#5C87A2'}}onPress={handlePressProfile}>
            <Text  style={{...styles.fontButtomTittle}}>Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={{...styles.gridColumn}}>
          <TouchableOpacity style={{...styles.gridButtom,marginTop:20, backgroundColor: '#5C87A2'}} onPress={handlePressMaps}>
            <Text  style={{...styles.fontButtomTittle}}>Maps</Text>
          </TouchableOpacity>
        </View>
      </View>
      
               </ImageBackground>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gridRow: {
    flex: 1,
  },
  gridColumn: {
    flex: 1,
    alignItems: 'center',
    
  },
  imageBack: {
    flex: 1,
    justifyContent: "center"
  },

  fontButtomTittle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  gridButtom: {
    width: windowWidth*.4,
    height: windowHeight*.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#82BACE',
    image: {},
    height: '100%',
    width: '100%',
  },
});

export default Home;
