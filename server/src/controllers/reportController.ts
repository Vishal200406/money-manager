import { Request, Response } from "express";

import Transaction from "../models/Transaction";

import PDFDocument from "pdfkit";

import ExcelJS from "exceljs";





const getTransactionData = async (

  userId:string,

  period:string

)=>{


  let startDate = new Date();





  if(period === "year"){


    startDate.setFullYear(

      startDate.getFullYear() - 1

    );


  }

  else if(period === "month"){


    startDate.setMonth(

      startDate.getMonth() - 1

    );


  }

  else{


    startDate = new Date(0);


  }





  const transactions = await Transaction.find({

    userId,

    date:{

      $gte:startDate

    }


  })

  .populate(

    "categoryId",

    "name icon"

  );





  return transactions;


};









export const getReports = async (

  req: Request,

  res: Response

)=>{


  try{


    const userId = (req as any).user.id;


    const period =

      String(req.query.period || "month");




    const transactions = await getTransactionData(

      userId,

      period

    );






    let income = 0;


    let expenses = 0;



    const categories:any = {};



    const trend:any = {};







    transactions.forEach((transaction:any)=>{



      const month =

        transaction.date.toLocaleString(

          "default",

          {

            month:"long"

          }

        );



      if(!trend[month]){


        trend[month]={

          month,

          income:0,

          expenses:0,

          savings:0

        };


      }





      if(transaction.type === "income"){


        income += transaction.amount;


        trend[month].income += transaction.amount;


      }

      else{


        expenses += transaction.amount;


        trend[month].expenses += transaction.amount;





        const categoryName =

          transaction.categoryId?.name ||

          "Other";





        if(!categories[categoryName]){


          categories[categoryName]={

            name:categoryName,

            amount:0

          };


        }



        categories[categoryName].amount +=

          transaction.amount;


      }



    });







    Object.values(trend).forEach(

      (item:any)=>{


        item.savings =

          item.income -

          item.expenses;


      }

    );







    const categoryData =

      Object.values(categories).map(

        (item:any)=>(

          {


            ...item,


            percent:

              expenses > 0

              ?

              Math.round(

                (item.amount / expenses) * 100

              )

              :

              0


          }

        )

      );







    return res.json({


      income,


      expenses,


      savings:

        income - expenses,


      categories:

        categoryData,


      trend:

        Object.values(trend)


    });




  }

  catch(error){


    console.error(error);



    return res.status(500).json({

      message:

        "Failed generating report"

    });


  }


};









export const exportPDF = async (

  req: Request,

  res: Response

)=>{


  try{


    const userId = (req as any).user.id;


    const period =

      String(req.query.period || "month");



    const transactions = await getTransactionData(

      userId,

      period

    );



    const doc = new PDFDocument();




    res.setHeader(

      "Content-Type",

      "application/pdf"

    );


    res.setHeader(

      "Content-Disposition",

      `attachment; filename=financial-report-${period}.pdf`

    );



    doc.pipe(res);




    doc.fontSize(20)

      .text(

        "Financial Report",

        {

          align:"center"

        }

      );



    doc.moveDown();




    transactions.forEach((transaction:any)=>{


      doc.fontSize(12)

      .text(

        `${transaction.date.toDateString()} | ${transaction.type} | $${transaction.amount}`

      );


    });



    doc.end();



  }

  catch(error){


    console.error(error);



    res.status(500).json({

      message:"PDF export failed"

    });


  }


};









export const exportExcel = async (

  req: Request,

  res: Response

)=>{


  try{


    const userId = (req as any).user.id;


    const period =

      String(req.query.period || "month");



    const transactions = await getTransactionData(

      userId,

      period

    );




    const workbook = new ExcelJS.Workbook();



    const sheet = workbook.addWorksheet(

      "Transactions"

    );




    sheet.columns=[

      {

        header:"Date",

        key:"date",

        width:20

      },

      {

        header:"Type",

        key:"type",

        width:15

      },

      {

        header:"Amount",

        key:"amount",

        width:15

      },

      {

        header:"Category",

        key:"category",

        width:20

      }

    ];







    transactions.forEach((transaction:any)=>{


      sheet.addRow({

        date:

          transaction.date.toDateString(),


        type:

          transaction.type,


        amount:

          transaction.amount,


        category:

          transaction.categoryId?.name || "Other"


      });


    });








    const buffer = await workbook.xlsx.writeBuffer();




    res.setHeader(

      "Content-Type",

      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

    );



    res.setHeader(

      "Content-Disposition",

      `attachment; filename=financial-report-${period}.xlsx`

    );




    res.send(buffer);



  }

  catch(error){


    console.error(error);



    res.status(500).json({

      message:"Excel export failed"

    });


  }


};