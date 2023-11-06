import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import Header from '../../components/Header';
import {Icon} from '@rneui/themed';
import {getPokemon} from '../../api';
import {useEffect, useState} from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ListDetails = props => {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    if (!props?.route?.params?.url) {
      return;
    }
    getPokemon(props.route.params.url).then(data => {
      setPokemon(data);
    });
  }, [props?.route?.params?.url]);
  const backgroundimg = {
    uri: 'https://img.freepik.com/vector-gratis/fondo-abstracto-negro-azul_1340-17010.jpg',
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={backgroundimg}
        resizeMode={'cover'}
        style={{...styles.imageBack}}>
        <Header
          leftComponent={
            <View>
              <TouchableOpacity
                style={{marginTop: 5}}
                onPress={() => props.navigation.goBack()}>
                <Icon name="chevron-left" color={'white'} />
              </TouchableOpacity>
            </View>
          }
        />
        {pokemon && (
          <View style={{...styles.gridRow}}>
            <View style={{...styles.containerPoke}}>
              <Text
                style={{
                  fontSize: 30,
                  textTransform: 'capitalize',
                  marginTop: 40,
                  color: 'black',
                }}>
                {pokemon?.name}
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                {`Altura : ${pokemon?.height}`}
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                {`Peso : ${pokemon?.weight}`}
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                {`Exp Base : ${pokemon?.base_experience}`}
              </Text>
              <Image
                style={{width: 200, height: 200}}
                source={{uri: pokemon?.sprites?.front_default}}
              />
            </View>
          </View>
        )}
      </ImageBackground>
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
  containerPoke: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B4C1DC',
    height: '50%',
    width: '60%',
    borderRadius: 10,
  },
  imageBack: {
    flex: 1,
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  colorArrow: {
    color: 'white',
  },
});

export default ListDetails;
