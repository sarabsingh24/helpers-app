import axios from 'axios';

const BASE_URL = 'http://localhost:8082';

//======Fetch all catagory ==================

const getCatagory = async () => {
  const response = await axios.get(BASE_URL + '/catagory');
  const data = await response.data;

  return data;
};

const catagoryAPI = { getCatagory };

export default catagoryAPI;
