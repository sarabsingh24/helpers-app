import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react'
import Colors from 'src/utils/Colors';

import {badgeColor } from 'src/utils/helpers'

const UsersCard = (props) => {
    
    const { name, phone, state, thumImage, intrest,rating } = props;
    
  return (
    <View className=" flex flex-row  p-4  mb-2  bg-white shadow-lg items-center justify-start  rounded-xl">
      <Image
        source={{ uri: thumImage }}
        style={styles.imageSize}
        className="rounded-md"
      />
      <View className="ml-3">
        <Text className="text-base font-semibold text-gray-600">{name}</Text>
        <Text className="text-sm font-semibold  text-gray-600">{phone}</Text>
        <Text className="text-sm font-semibold  text-gray-600">{state}</Text>
        <Text className="text-sm font-semibold text-gray-600">{rating}</Text>
        <View style={styles.batches}>
          {intrest.map((item) => {
           
           return (
             <Text
               style={styles.batchesItems}
               className="px-2 py-1  border rounded-md text-white"
             >
               {item}
             </Text>
           );
})}
        </View>
      </View>
    </View>
  );
};

export default UsersCard

const styles = StyleSheet.create({
  imageSize: {
    width: 110,
    height: 110,
  },
  batches: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap:4
  },

  batchesItems:{

backgroundColor:Colors.BlueGray._600,


  }
});