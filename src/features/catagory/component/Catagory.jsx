import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

//reducer
import { useSelector, useDispatch } from 'react-redux';
import { fetchCatagoryAsync } from 'src/features/catagory/catagorySlice';

//component
import CatagoryItems from 'src/features/catagory/component/CatagoryItems'


const Catagory = () => {
  const { catagory } = useSelector((state) => state.catagory);

  const dispatch = useDispatch();
const navigation = useNavigation();
  useEffect(() => {
    dispatch(fetchCatagoryAsync());
  }, []);

  return (
    <View className="m-4">
      <Text className="">Catagories</Text>
      <FlatList
        data={catagory}
        // horizontal={true}
        // showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContents}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(item.page)}>
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
    justifyContent: 'space-between', 
    // alignItems: 'center',
  },
});
