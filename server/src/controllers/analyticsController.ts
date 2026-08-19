import { Response } from "express";

import {
  AuthRequest
} from "../middleware/authMiddleware";

import Transaction from "../models/Transaction";

import Budget from "../models/Budget";



export const getDashboardAnalytics = async (

  req: AuthRequest,

  res: Response

) => {

  try {


    const userId = req.user?.id;



    if (!userId) {

      return res.status(401).json({

        message:
          "Not authenticated",

      });

    }



    const transactions =
      await Transaction.find({

        userId,

      });



    let income = 0;

    let expenses = 0;



    transactions.forEach(
      (transaction)=>{


        if(transaction.type === "income"){

          income += transaction.amount;

        }


        if(transaction.type === "expense"){

          expenses += transaction.amount;

        }


      }

    );



    const savings =
      income - expenses;



    const budgets =
      await Budget.find({

        userId,

      })
      .populate(

        "categoryId",

        "name icon"

      );



    const budgetStatus =
      await Promise.all(

        budgets.map(
          async(budget)=>{


            const categoryExpenses =
              await Transaction.aggregate([

              {

                $match:{

                  userId:
                    budget.userId,

                  categoryId:
                    budget.categoryId,

                  type:
                    "expense",

                  },

              },

              {

                $group:{

                  _id:null,

                  total:{

                    $sum:"$amount",

                  },

                },

              },

            ]);



            const spent =
              categoryExpenses[0]?.total || 0;



            const percentage =
              (spent / budget.amount) * 100;



            return {

              category:
                budget.categoryId,

              limit:
                budget.amount,

              spent,

              percentage,

              status:

                percentage >= 100

                ? "exceeded"

                :

                percentage >= 80

                ? "warning"

                :

                "safe",

            };


          }

        )

      );



    return res.json({

      income,

      expenses,

      savings,

      budgetStatus,

    });



  } catch(error) {


    console.error(error);



    return res.status(500).json({

      message:
        "Failed to load analytics",

    });


  }

};