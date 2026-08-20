import api from "./api";



export const getReports = async (

  period:string

)=>{


  const response = await api.get(

    `/reports?period=${period}`

  );


  return response.data;


};







const downloadFile = (

  blob:any,

  filename:string

)=>{


  const url = window.URL.createObjectURL(

    blob

  );



  const link = document.createElement(

    "a"

  );


  link.href = url;


  link.download = filename;



  document.body.appendChild(link);



  link.click();



  link.remove();



  window.URL.revokeObjectURL(url);



};








export const exportPDF = async (

  period:string

)=>{


  const response = await api.get(

    `/reports/export/pdf?period=${period}`,

    {

      responseType:"blob"

    }

  );



  downloadFile(

    response.data,

    `financial-report-${period}.pdf`

  );


};








export const exportExcel = async (

  period:string

)=>{


  const response = await api.get(

    `/reports/export/excel?period=${period}`,

    {

      responseType:"blob"

    }

  );



  downloadFile(

    response.data,

    `financial-report-${period}.xlsx`

  );


};