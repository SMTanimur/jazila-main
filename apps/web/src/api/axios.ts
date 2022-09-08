/* eslint-disable prefer-const */

import axios from 'axios';



 const api = axios.create({
  baseURL:'http://localhost:3333',
  withCredentials: true,
});




const dynamicAPI = async (method:string, url:string, obj = {}) => {
  try {
    switch (method) {
      case 'get':
        return await api.get(`${url}`).then((res) => res.data)

      case 'post':
        return await api.post(`${url}`, obj).then((res) => res.data)

      case 'put':
        return await api.put(url, obj).then((res) => res.data)

      case 'delete':
        return await api.delete(url).then((res) => res.data)
    }
  } catch (error) {
    throw error.response.data.message
    
  }
}

export default dynamicAPI

