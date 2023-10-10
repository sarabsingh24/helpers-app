import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import * as Location from 'expo-location';
//reducer
import { locationSliceFun, getOnlineNearbyUsersAsync } from '../MapSlice';

//icon
import Feather from '@expo/vector-icons/Feather';

const GoogleMapView = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const { myLocation, newarByOnlineUsers } = useSelector(
    (state) => state.location
  );
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      const { latitude, longitude } = location.coords;
      dispatch(locationSliceFun({ latitude, longitude }));
      dispatch(getOnlineNearbyUsersAsync());
    })();
  }, []);

  useEffect(() => {
    setMapRegion({
      ...mapRegion,
      latitude: myLocation.latitude,
      longitude: myLocation.longitude,
    });
  }, [myLocation.latitude, myLocation.longitude]);

  return (
    <View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
      >
        <Marker
          title="You are here"
          coordinate={mapRegion}
          image={require('src/images/user-c.png')}
        />
        {newarByOnlineUsers.length > 0 &&
          newarByOnlineUsers.map((user, ind) => ind < 2 && (
              <Marker
                title={user.name}
                key={ind}
                style={{opacity:.6}}
                coordinate={{
                  latitude: user.position.lat,
                  longitude: user.position.long,
                }}
                image={require('src/images/location-sb.png')}
              />
            )
          )}
      </MapView>
    </View>
  );
};

export default GoogleMapView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
