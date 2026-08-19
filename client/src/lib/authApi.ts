import api from "./api";


export const logoutUser = async()=>{

  const response = await api.post(
    "/auth/logout"
  );


  return response.data;

};