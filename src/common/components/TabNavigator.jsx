import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
//reducer
import { useSelector } from 'react-redux';
//icons
import Feather from '@expo/vector-icons/Feather';

//screens
import HomeScreen from '@screens/HomeScreen';
import MapScreen from '@screens/MapScreen';
import SearchScreen from '@screens/SearchScreen';
import SettingScreen from '@screens/SettingScreen';
import Colors from 'src/utils/Colors';
// import Catagory from 'src/features/catagory/component/Catagory';
import CatagoriesScreen from 'src/screens/CatagoriesScreen';

const TabNavigator = () => {
  const { IsAvailable } = useSelector((state) => state.availability);
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();

  return (
    <>
      {IsAvailable ? (
        <Tab.Navigator screenOptions={{ headerShown: true }}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            TouchableOpacity={'enabled'}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => {
                return (
                  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Feather name="home" size={24} style={styles.tabIcon} />
                  </TouchableOpacity>
                );
              },
            }}
          />

          <Tab.Screen
            name="Catagory"
            component={CatagoriesScreen}
            TouchableOpacity={'enabled'}
            options={{
              tabBarLabel: 'Catagory',
              tabBarIcon: ({ color, size }) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Catagory')}
                  >
                    <Feather name="list" size={24} style={styles.tabIcon} />
                  </TouchableOpacity>
                );
              },
            }}
          />
          <Tab.Screen
            name="View"
            component={MapScreen}
            options={{
              tabBarLabel: 'View',
              tabBarIcon: ({ color, size }) => {
                return (
                  <TouchableOpacity onPress={() => navigation.navigate('View')}>
                    <Feather name="map-pin" size={24} style={styles.tabIcon} />
                  </TouchableOpacity>
                );
              },
            }}
          />

          <Tab.Screen
            name="Setting"
            component={SettingScreen}
            options={{
              tabBarLabel: 'Setting',
              tabBarIcon: ({ color, size }) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Setting')}
                  >
                    <Feather name="settings" size={24} style={styles.tabIcon} />
                  </TouchableOpacity>
                );
              },
            }}
          />
        </Tab.Navigator>
      ): <HomeScreen />}
    </>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabIcon: {
    color: Colors.BlueGray._600,
  },
});
