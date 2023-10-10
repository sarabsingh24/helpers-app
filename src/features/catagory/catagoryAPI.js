import axios from 'axios';
import { BASE_URL } from 'src/utils/constant';

//======Fetch all catagory ==================

const getCatagory = async () => {
  const response = await axios.get(BASE_URL + '/catagory');
  const data = await response.data;

  return data;
};

const catagoryAPI = { getCatagory };

export default catagoryAPI;
