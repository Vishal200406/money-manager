import { Request, Response } from "express";

import Transaction from "../models/Transaction";



export const getReports = async (

  req: Request,

  res: Response

) => {


  try {


    const userId = (req as any).user.id;


    const period =

      req.query.period || "month";





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









    let income = 0;


    let expenses = 0;




    const categories:any = {};









    transactions.forEach((transaction:any)=>{





      if(transaction.type === "income"){


        income += transaction.amount;


      }

      else{



        expenses += transaction.amount;





        const categoryName =


          transaction.categoryId?.name ||


          "Other";








        if(!categories[categoryName]){


          categories[categoryName] = {


            name:

              categoryName,


            amount:

              0


          };


        }








        categories[categoryName].amount +=

          transaction.amount;



      }




    });









    const categoryData =


      Object.values(categories).map(

        (item:any)=>(


          {


            ...item,


            percent:

              expenses > 0

              ?

              Math.round(

                (

                  item.amount /

                  expenses

                ) * 100

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


      trend:[]


    });






  }

  catch(error){



    console.error(

      "Report error:",

      error

    );



    return res.status(500).json({


      message:

        "Failed generating report"


    });



  }



};