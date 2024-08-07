import { axiosInstance } from "../../Utilis/Config/apiConfig";

export const login = async()=>{
  const respone = await axiosInstance.get('authentication')
  return respone
}