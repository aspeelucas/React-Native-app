import React from 'react';
import {useState, useEffect, useRef} from 'react';
import Geolocation from '@react-native-community/geolocation';
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
import {hasLocationPermission} from '../../service/locationPermissions';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ASPECT_RATIO = windowWidth / windowHeight;
const LATITUDE = -26.834129;
const LONGITUDE = -65.194769;
const LATITUDE_DELTA = 0.001;
const LONGITUDE_DELTA = 0.001;

const Maps = (props) => {
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    longitude: LONGITUDE,
    latitude: LATITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const [markerState, setMarker] = useState({
    markerPosition: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0421,
      longitudeDelta: 0.0421,
    },
    markerShown: false,
    markerTitle: '',
    markerPresses: 0,
  });
  const handleMapPress = coord => {
    setMarker({
      ...markerState,
      markerShown: true,
      markerPosition: coord,
      markerTitle: 'Ubicacion',
      markerPresses: markerState.markerPresses + 1,
    });
  };
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;

        
        mapRef.current.animateToRegion(
          {
            latitude,
            longitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
          },
          1000,
        );
        setRegion( {longitude, latitude, ...region});
      }
    )
  }

  useEffect(() => {
    hasLocationPermission();
    getCurrentLocation();
  }, []);

  

  onRegionChange = region => {
    setRegion(region);
  };

  fitCoordinates = async () => {
    console.log('centrando mapa');
    getCurrentLocation();
  };

  return (
    <>
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
    <View style={{flex: 1}}>
      <MapView
        ref={mapRef}
        mapType="standard"
        style={styles.map}
        initialRegion={region}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        onRegionChangeComplete={onRegionChange}
        onLongPress={({nativeEvent: {coordinate}}) =>
          handleMapPress(coordinate)
        }>
        {markerState.markerShown && (
          <Marker
            title={markerState.markerTitle}
            coordinate={markerState.markerPosition}
          />
        )}
      </MapView>
      <View
        style={{
          position: 'absolute',
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: 100,
          width: windowWidth / 10,
          alignSelf: 'flex-end',
          margin: 20,
          marginRight: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon
          name="crosshairs"
          type="font-awesome"
          color="#8d2d84"
          size={windowWidth / 10}
          onPress={() => fitCoordinates()}
        />
      </View>
      <SafeAreaView style={styles.footer}>
        <Text style={styles.region}>
          longitud:
          {JSON.stringify(region.longitude)}
          {'\n'}latitud:
          {JSON.stringify(region.latitude)}
        </Text>
      </SafeAreaView>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    margin: windowWidth / 20,
    height: windowWidth / 2.5,
    width: windowWidth / 2.5,
    borderRadius: 15,
    justifyContent: 'center',
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: windowWidth,
    height: windowHeight,
    alignSelf: 'center',
  },
  marker: {
    height: 48,
    width: 48,
  },
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 30,
    position: 'absolute',
    width: '100%',
  },
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20,
    alignSelf: 'center',
  },
});



export default Maps;
