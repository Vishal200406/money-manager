import api from "./api";


export const downloadPDF =
()=>{


window.open(

`${api.defaults.baseURL}/exports/pdf`

);


};



export const downloadExcel =
()=>{


window.open(

`${api.defaults.baseURL}/exports/excel`

);


};