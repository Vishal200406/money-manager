import api from "./api";


export const getNotifications =
async()=>{


const response =
await api.get(

"/notifications"

);


return response.data;

};



export const markRead =
async(

id:string

)=>{


const response =
await api.patch(

`/notifications/${id}`

);



return response.data;

};