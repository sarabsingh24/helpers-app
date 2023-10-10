import React, { Fragment, useState } from 'react';
import { StyleSheet, Text, View, Switch, Button } from 'react-native';
import GoogleMapView from 'src/features/Map/component/GoogleMapView';

//component

const MapScreen = () => {
  return (
    <Fragment>
      <View>
        <View
          className="mt-6 flex  items-center justify-center rounded-full border border-1-grey-300 bg-white px-6 py-2  border-slate-400 "
          style={styles.btn}
        >
          <Button
            title="Re-center"
            onPress={() => console.log('alert')}
            color="#222"
          />
        </View>
        <GoogleMapView />
      </View>
    </Fragment>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    zIndex: 3,
    bottom: 32,
    left: 8,
  },
});
