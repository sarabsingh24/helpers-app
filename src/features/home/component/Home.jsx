import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Feather from '@expo/vector-icons/Feather';
import Colors from 'src/utils/Colors';
import { useSelector, useDispatch } from 'react-redux';

import face from 'src/images/p11.jpeg';

//reducer
import { availabilityFun } from '../homeSlice';

const accessList = [
  {
    text: 'Now you are available to help.',
  },
  {
    text: 'Your current location is updated.',
  },
  {
    text: 'People around you can ask for help.',
  },
];

const Home = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const { IsAvailable } = useSelector((state) => state.availability);
  const dispatch = useDispatch();

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    dispatch(availabilityFun(!isEnabled));
  };

  useEffect(() => {
    setIsEnabled(IsAvailable);
  }, [IsAvailable]);

  const opacity = !isEnabled ? 'opacity-30' : null;
  const position = isEnabled ? 'top':'bottom' ;

  return (
    <View className=" flex h-full items-center justify-center   ">
      <View className="  items-center  relative ">
        <View>
          <TouchableOpacity onPress={toggleSwitch}>
            <Image
              source={face}
              className={`h-52 w-24 flex-none rounded-full opacity-10  `}
            />
            <Image
              source={face}
              className={`h-24 w-24 flex-none rounded-full  absolute border-4 border-white  ${opacity} transition ease-in-out delay-500`}
              style={{ [position]: 0 }}
            />
          </TouchableOpacity>
        </View>
        <Text className="text-xl font-semibold text-gray-900">Leza Hadern</Text>
        <View className="flex flex-row items-center justify-center mt-1 mb-4  ">
          <Feather name="map-pin" size={18} style={styles.tabIcon} />
          <Text className=" text-sm font-semibold text-gray-600  mx-1">
            Delhi, India
          </Text>
        </View>
        <View className="w-80 items-center  ">
          <Text className="text-gray-600 text-center mb-4">
            Hi, how are you feeling today, are you in mood to be volinteer to
            help someone in need? please switch “ON” your App.
          </Text>

          <View
            className={`items-center gap-2 mt-2 text-gray-300 ${
              isEnabled ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Feather name="check-circle" size={62} style={styles.active} />

            {accessList.map((item, ind) => {
              return (
                <Text key={ind} className="text-gray-600">
                  - {item.text}
                </Text>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  tabIcon: {
    color: Colors.BlueGray._600,
  },
  active: {
    color: Colors.Green._900,
  },
});
