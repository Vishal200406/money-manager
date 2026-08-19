import PDFDocument from "pdfkit";

import ExcelJS from "exceljs";



export const generatePDF = (

data:any

)=>{


const doc =
new PDFDocument();



doc.fontSize(20)
.text(
"Money Manager Report"
);



doc.moveDown();



doc.fontSize(12)
.text(

`Income: ${data.income}`

);



doc.text(

`Expenses: ${data.expenses}`

);



doc.text(

`Savings: ${data.savings}`

);



return doc;

};






export const generateExcel = async(

data:any

)=>{


const workbook =
new ExcelJS.Workbook();



const sheet =
workbook.addWorksheet(

"Financial Report"

);



sheet.addRow([

"Income",

data.income

]);



sheet.addRow([

"Expenses",

data.expenses

]);



sheet.addRow([

"Savings",

data.savings

]);



return workbook.xlsx.writeBuffer();

};