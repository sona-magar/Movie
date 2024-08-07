import axios from 'axios';
import { environmentConfig } from './environmentConfig';

export const axiosInstance = axios.create({
  baseURL:environmentConfig.baseURL
})

axiosInstance.defaults.headers.post['Content-Type']='application/json'

axiosInstance.interceptors.request.use(
  (config)=>{
    const accessToken = environmentConfig.apiToken
    if(accessToken){
      config.headers.Authorization='Bearer ${accessToken}'
    }
    return config
  },
  (error)=>{
    return Promise.reject(error)
  },
  )
