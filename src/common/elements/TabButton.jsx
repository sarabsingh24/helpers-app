import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const TabButton = ({ name, component, lable, icon }) => {
  const Tab = createBottomTabNavigator();

  return (
  
      <Tab.Screen
        name={name}
        component={component}
        options={{
          tabBarLabel: { lable },
          tabBarIcon: ({ color, size }) => {
            return <Feather name={icon} size={24} color="black" />;
          },
        }}
      />
  
  );
};

export default TabButton

const styles = StyleSheet.create({})