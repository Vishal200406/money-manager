import api from "./api";


export const getReports = async(

period:string

)=>{


const response =

await api.get(

`/reports?period=${period}`

);


return response.data;


};



export const exportPDF = async(

period:string

)=>{


return api.get(

`/reports/export/pdf?period=${period}`,

{

responseType:"blob"

}

);


};



export const exportExcel = async(

period:string

)=>{


return api.get(

`/reports/export/excel?period=${period}`,

{

responseType:"blob"

}

);


};