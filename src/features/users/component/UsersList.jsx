import { StyleSheet, Text, View, FlatList } from 'react-native';
import React,{useEffect} from 'react';

//reducer
import { useSelector, useDispatch } from 'react-redux';
import {fetchUsersAsync} from '../usersSlice'
//component
import UserCard from './UsersCard';

const UsersList = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(()=>{
dispatch(fetchUsersAsync());
  },[])


  return (
    
      <FlatList
        data={users}
        // horizontal={true}
        // showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.listContents}
        renderItem={({ item }) => users.length > 0 && <UserCard {...item} />}
      />
   
  );
};

export default UsersList;

const styles = StyleSheet.create({});
