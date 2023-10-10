import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

//reducer
import { useSelector, useDispatch } from 'react-redux';
import { fetchCatagoryAsync } from 'src/features/catagory/catagorySlice';

//component
import CatagoryItems from 'src/features/catagory/component/CatagoryItems';

const Catagory = () => {
  const { catagory } = useSelector((state) => state.catagory);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    dispatch(fetchCatagoryAsync());
  }, []);

  return (
    <View className="flex m-4 ">
      <FlatList
        data={catagory}
        // horizontal={true}
        // showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContents}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.page)}
            style={styles.box}
          >
            <CatagoryItems type={item.type} thumImage={item.thumImage} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Catagory;

const styles = StyleSheet.create({
  listContents: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {},
});
