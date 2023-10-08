import React, { Fragment } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Icon } from '@rneui/themed';
import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { menuData } from '@utils/navData';

const NavOptions = () => {
  return (
    <View>
      {menuData.map((l, i) => (
        <ListItem
          key={i}
          containerStyle={l.containerStyle}
          onPress={() => navigation.navigate(l.screen)}
        >
          <ListItem.Content>
            <ListItem.Title>{l.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 1,
  },
});

export default NavOptions;

// <View>
//   {menuData.map((l, i) => (
//     <ListItem
//       key={i}
//       containerStyle={l.containerStyle}
//       onPress={() => navigation.navigate(l.screen)}
//     >
//       <ListItem.Content>
//         <ListItem.Title>{l.title}</ListItem.Title>
//       </ListItem.Content>
//     </ListItem>
//   ))}
// </View>
//   <FlatList
//     data={menuData}
//     keyExtractor={(item) => item.id}
//     horizontal
//     className="w-60 bg-red-300"
//     renderItem={({ item }) => (
//       <TouchableOpacity className="flex-auto items-start justify-between mx-1  ">
//         <Button buttonStyle={styles.button}>
//           <Icon name="aperture" color="white" type="feather" />
//           <Text className="text-white"> {item.title}=4</Text>
//         </Button>
//       </TouchableOpacity>
//     )}
//   />
