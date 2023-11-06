import React, {useState, useEffect, useCallback} from 'react';

import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import Header from '../../components/Header';
import {Text, Avatar, Button, ListItem,Icon} from '@rneui/themed';
import {IMG_URL, getPokemonList} from '../../api';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default List = props => {
  const [pokemons, setPokemons] = useState();
  const [next, setNext] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  useEffect(() => {
    getPokemonList().then(data => {
      setPokemons(data.results);
      setNext(data.next);
    });
  }, []);
  const loadMore = () => {
    setLoadingMore(true);
    getPokemonList(next).then(data => {
      setPokemons([...pokemons, ...data.results]);
      setNext(data.next);
      setLoadingMore(false);
    });
  };
  const getPokemonImgId = id => {
    switch (id.length) {
      case 1:
        return `00${id}`;
      case 2:
        return `0${id}`;
      default:
        return id;
    }
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    console.log('refreshing');
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const renderItem = item => {
    const path = item?.url?.split('/');
    const imgID = getPokemonImgId(path[6]);

    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ListDetail', item)}
        style={{
          marginVertical: '1%',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 0.5,
          borderColor: '#707070',
          borderRadius: 5,
        }}>
        <ListItem style={{width}}>
          <ListItem.Content>
            <ListItem.Title style={{textTransform: 'capitalize', fontSize: 20}}>
              {item.name}
            </ListItem.Title>
          </ListItem.Content>
          <Avatar size="large" source={{uri: `${IMG_URL}${imgID}.png`}} />
        </ListItem>
      </TouchableOpacity>
    );
  };
  const backgroundimg = {
    uri: 'https://img.freepik.com/vector-gratis/fondo-abstracto-negro-azul_1340-17010.jpg',
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <ImageBackground
          source={backgroundimg}
          resizeMode={'cover'}
          style={{...styles.imageBack}}>
          <Header leftComponent ={(
        <View>
          <TouchableOpacity style={{marginTop:5}} onPress={()=>props.navigation.goBack()}>
            <Icon  name="chevron-left" color={"white"}/>
          </TouchableOpacity>
        </View>

      )}/>
          <View style={styles.containerTitle}>
            <Text style={styles.textTitle}>Pokemon List</Text>
          </View>
          <FlatList
            data={pokemons}
            bounces={false}
            renderItem={(item, index) => renderItem(item.item, index)}
            keyExtractor={(item, index) => index}
            style={{}}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => onRefresh()}
              />
            }
            ListFooterComponent={
              loadingMore ? (
                <ActivityIndicator />
              ) : (
                <Button title="Cargar mas" onPress={() => loadMore()} />
              )
            }
          />
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
  },
  textTitle: {
    color: 'white',
    fontSize: 30,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
  },
  buttonContent: {
    width: width / 3,
    height: width / 3,
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    flex: 1,
    width,
    height,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  rowConten: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  imageBack: {
    flex: 1,
    justifyContent: 'center',
  },
});

// const List = (props) => {

//   const handdlePressDetail = () => {
//     props.navigation.navigate("ListDetail")
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//        <Header leftComponent ={(
//         <View>
//           <TouchableOpacity style={{marginTop:5}} onPress={()=>props.navigation.goBack()}>
//             <Icon  name="chevron-left" color={"white"}/>
//           </TouchableOpacity>
//         </View>

//       )} />
//       <View style={{...styles.gridRow, flexDirection: 'Column'}}>
//         <Text style={{fontSize:20}}>
//            List
//         </Text>
//         <Pressable style={{...styles.gridButtom}} onPress={handdlePressDetail}>
//           <Text style={{...styles.textoDetalle}}>Ir a Detalles</Text>
//         </Pressable>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   gridRow: {
//     flex: 1,
//     height: windowHeight,
//     width: windowWidth,
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 30,
//   },

//   gridButtom: {
//     backgroundColor: 'blue',
//     width:100,
//     height:100,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   textoDetalle :{
//     fontSize:20,
//     color:'white',
//     textAlign:'center'
//   },

//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     height: '100%',
//     width: '100%',
//   },
// });
