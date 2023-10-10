
import axios from 'axios'
import { BASE_URL } from 'src/utils/constant';

//   ?keyword=cruise
//   &location=-33.8670522%2C151.1957362
//   &radius=1500
//   &type=restaurant
//   &key=YOUR_API_KEY



const getUsers = async ()=>{
    const response =
      await axios.get(`${BASE_URL}/users`);
  const data = await response.data
  return data

}

const mapAPI = { getUsers };

export default mapAPI;

