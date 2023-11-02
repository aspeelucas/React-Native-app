import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

const Popmenu = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const navigation = useNavigation();
  return (

    <View style={{width: 25, height: 25, marginTop: 5}}>
        {/* <Pressable style={{position:'absolute',backgroundColor:'red',flex:1,right:0,top:0,zIndex:998}}>
        </Pressable> */}
      {modalVisible && (
        <Pressable onPress={(event) => event.target == event.currentTarget && setModalVisible(false)}>
          <View style={styles.popupmenu}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProfileTab');
              }}>
              <Text style={styles.popupmenutexto}>Perfil</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      )}
      <TouchableOpacity>
        <Icon
          onPress={() => setModalVisible(prev => !prev)}
          name="sc-telegram"
          type="evilicon"
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  popupmenu: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 100,
    top: 35,
    right: 5,
    elevation: 10,
  },
  popupmenutexto: {
    color: 'black',
    fontSize: 20,
  },
});

export default Popmenu;
