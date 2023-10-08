import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react'

const SearchBox = ({ placeholder ,sty}) => {
    
  return <TextInput placeholder={placeholder} className={sty}></TextInput>;
};

export default SearchBox

const styles = StyleSheet.create({})