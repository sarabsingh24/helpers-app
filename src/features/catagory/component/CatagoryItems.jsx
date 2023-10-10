import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';


//icons
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import money from 'src/images/money.png';
import doctor from 'src/images/doctor.png';
import lost from 'src/images/lost.png';
import danger from 'src/images/danger.png';
import guide from 'src/images/guide.png';
import accident from 'src/images/accident.png';
import mechanic from 'src/images/mechanic.png';
import talk from 'src/images/talk.png';

const CatagoryItems = ({ type, thumImage}) => {
  const [imgIcon, setImgIcon] = useState('');

  useEffect(() => {
    let icon = '';
    switch (thumImage) {
      case 'money':
        icon = money;
        break;
      case 'medical':
        icon = doctor;
        break;
      case 'lost':
        icon = lost;
        break;
      case 'danger':
        icon = danger;
        break;
      case 'guidence':
        icon = guide;
        break;
      case 'accident':
        icon = accident;
        break;
      case 'mechanic':
        icon = mechanic;
        break;
      case 'talk':
        icon = talk;
        break;
    }
    setImgIcon(icon);
  }, []);

  return (
    <>
      <View
        className=" w-48 px-8 py-6  m-2  bg-white shadow-lg items-center justify-between rounded-xl"
        style={styles.container}
      >
        {/* <FontAwesome name={thumImage} size={24} /> */}
        <Image
          source={imgIcon}
          style={styles.logo}
          className="flex-none w-14 h-14 mr-2 opacity-70"
        />
        <Text className="pt-4 text-sm">{type}</Text>
      </View>
    </>
  );
};

export default CatagoryItems;

const styles = StyleSheet.create({
  container: {},
  icon: {
    marginBottom: 4,
  },
});
