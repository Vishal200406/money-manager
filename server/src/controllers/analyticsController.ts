import { Response } from "express";


import {

  AuthRequest

} from "../middleware/authMiddleware";


import Transaction from "../models/Transaction";

import Budget from "../models/Budget";





export const getDashboardAnalytics = async(

  req: AuthRequest,

  res: Response

)=>{


  try {


    const userId =

      req.user?._id;



    if(!userId){


      return res.status(401).json({

        message:

        "Not authenticated"

      });


    }





    const transactions = await Transaction.find({

      userId

    })

    .populate(

      "categoryId",

      "name icon"

    );







    let income = 0;


    let expenses = 0;





    const categoryMap:any = {};





    transactions.forEach(

      (transaction:any)=>{


        if(transaction.type === "income"){


          income += transaction.amount;


        }





        if(transaction.type === "expense"){


          expenses += transaction.amount;





          const category =

            transaction.categoryId;





          if(category){


            if(!categoryMap[category.name]){


              categoryMap[category.name] = {


                name:

                category.name,


                amount:0


              };


            }





            categoryMap[category.name].amount +=

              transaction.amount;


          }


        }


      }

    );







    const categoryExpenses =

      Object.values(categoryMap);







    const budgets = await Budget.find({

      userId

    })

    .populate(

      "categoryId",

      "name icon"

    );







    return res.status(200).json({


      income,


      expenses,


      savings:

        income - expenses,


      categoryExpenses,


      budgets


    });





  } catch(error){



    console.error(

      "Analytics error:",

      error

    );




    return res.status(500).json({

      message:

      "Analytics failed"

    });


  }


};