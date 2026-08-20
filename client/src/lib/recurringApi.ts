import api from "./api";



export const getRecurring =
async()=>{


  const response =
    await api.get(

      "/recurring"

    );


  return response.data;

};







export const createRecurring =
async(

  data:any

)=>{


  const response =

    await api.post(

      "/recurring",

      {

        name:data.name,


        amount:Number(data.amount),


        categoryId:data.categoryId,


        type:"expense",


        frequency:data.frequency,


        nextDate:data.nextPayment,


      }

    );



  return response.data;


};








export const deleteRecurring =
async(

  id:string

)=>{


  const response =

    await api.delete(

      `/recurring/${id}`

    );


  return response.data;


};