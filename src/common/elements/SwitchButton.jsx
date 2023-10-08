import { StyleSheet, Text, View, Switch } from 'react-native';
import React from 'react'

const SwitchButton = ({ isEnabled, toggleSwitch }) => {
  return (
    <Switch
      trackColor={{ false: '#767577', true: '#81b0ff' }}
      thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
      className="rotate-90 "
      
    />
  );
};

export default SwitchButton

const styles = StyleSheet.create({
    
})