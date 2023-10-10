import axios from 'axios';
import { BASE_URL } from 'src/utils/constant';

//======Fetch all users ==================

const getUsers = async () => {
  const response = await axios.get(BASE_URL + '/users');
  const data = await response.data;

  return data;
};

const usersAPI = { getUsers };

export default usersAPI;
