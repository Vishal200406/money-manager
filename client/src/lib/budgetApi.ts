import api from "./api";



export const getBudgets = async()=>{


  const response = await api.get(

    "/budgets"

  );


  return response.data;


};








export const createBudget = async(

  data:any

)=>{


  const now = new Date();




  const response = await api.post(

    "/budgets",

    {


      categoryId:

        data.categoryId,



      amount:

        Number(data.amount),



      month:

        now.getMonth() + 1,



      year:

        now.getFullYear()


    }

  );



  return response.data;


};









export const deleteBudget = async(

  id:string

)=>{


  const response = await api.delete(

    `/budgets/${id}`

  );



  return response.data;


};