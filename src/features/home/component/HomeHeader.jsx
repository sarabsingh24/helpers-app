import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import logo from 'src/images/logo.png';
import Colors from 'src/utils/Colors';

const HomeHeader = () => {
  return (
    <View className="flex flex-row items-center justify-between gap-2 m-2">
      <Image
        source={logo}
        style={styles.logo}
        className="flex-none w-14 h-12"
      />
      <TextInput
        className=" border border-gray-900/25 rounded-full bg-white  pl-3 text-gray-900  text-md font-medium grow h-12 "
        placeholder="Sarab preet Singh"
      ></TextInput>
      <Image
        source={logo}
        style={styles.logo}
        className="flex-none w-14  h-12"
      />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  logo: {
    width: 32,
    height: 32,
  },
});
