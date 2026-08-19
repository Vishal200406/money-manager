import api from "./api";


export const getNotifications = async()=>{

const response =
await api.get(
"/notifications"
);

return response.data;

};



export const deleteNotification = async(

id:string

)=>{


const response =
await api.delete(

`/notifications/${id}`

);


return response.data;


};