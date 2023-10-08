import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

//icons
import Feather from '@expo/vector-icons/Feather';

const CatagoryItems = ({ type, thumImage }) => {
  return (
    <View
      className="flex w-48 px-8 py-6  my-2  bg-white shadow-lg items-center justify-between rounded-xl"
      style={styles.container}
    >
      <Feather name={thumImage} size={24} />
      <Text className="pt-4">{type}</Text>
    </View>
  );
};

export default CatagoryItems;

const styles = StyleSheet.create({
  container: {},
  icon: {
    marginBottom: 4,
  },
});
