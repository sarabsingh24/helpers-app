import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

//component
import Home from 'src/features/home/component/Home';

const HomeScreen = () => {
  return (
    <SafeAreaView className=" h-full  ">
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
