import { Response } from "express";

import Transaction from "../models/Transaction";

import Budget from "../models/Budget";

import {
  AuthRequest
} from "../middleware/authMiddleware";

import {
  createNotification
} from "../services/notificationService";



// Create transaction
export const createTransaction = async (
  req: AuthRequest,
  res: Response
) => {

  try {

    const userId = req.user?.id;


    if (!userId) {

      return res.status(401).json({

        message:
          "User not authenticated",

      });

    }



    const transaction =
      await Transaction.create({

        userId,

        ...req.body,

      });





    // Budget notification check
    if(transaction.type === "expense"){


      const budgets =

        await Budget.find({

          userId,

          categoryId:
            transaction.categoryId,

        })

        .populate(

          "categoryId",

          "name"

        );




      for(const budget of budgets){


        const spentTransactions =

          await Transaction.find({

            userId,

            categoryId:
              transaction.categoryId,

            type:"expense",

            date:{

              $gte:new Date(

                new Date().getFullYear(),

                new Date().getMonth(),

                1

              )

            }

          });





        const spent =

          spentTransactions.reduce(

            (sum,item)=>

              sum + item.amount,

            0

          );





        const percentage =

          (spent / budget.amount) * 100;





        const categoryName =

          (budget.categoryId as any)?.name

          || "Category";





        if(
          percentage >= 100
        ){

          await createNotification(

            userId,

            "Budget Exceeded",

            `${categoryName} budget has exceeded its limit.`,

            "budget"

          );


        }

        else if(

          percentage >= 80

        ){

          await createNotification(

            userId,

            "Budget Warning",

            `${categoryName} budget is ${Math.round(percentage)}% used.`,

            "budget"

          );

        }


      }


    }







    const populatedTransaction =
      await Transaction.findById(
        transaction._id
      )
      .populate(
        "categoryId",
        "name icon"
      );



    return res.status(201).json({

      message:
        "Transaction created successfully",

      transaction:
        populatedTransaction,

    });



  } catch (error) {

    console.error(error);


    return res.status(500).json({

      message:
        "Failed to create transaction",

    });

  }

};







// Get all transactions
export const getTransactions = async (
  req: AuthRequest,
  res: Response
) => {

  try {

    const userId =
      req.user?.id;


    if (!userId) {

      return res.status(401).json({

        message:
          "User not authenticated",

      });

    }



    const transactions =
      await Transaction.find({

        userId,

      })
      .populate(
        "categoryId",
        "name icon"
      )
      .sort({

        date:-1,

      });



    return res.status(200).json(
      transactions
    );


  } catch(error) {

    console.error(error);


    return res.status(500).json({

      message:
        "Failed to fetch transactions",

    });

  }

};







// Delete transaction
export const deleteTransaction = async (
  req: AuthRequest,
  res: Response
) => {

  try {

    const userId =
      req.user?.id;


    if (!userId) {

      return res.status(401).json({

        message:
          "User not authenticated",

      });

    }



    const transaction =
      await Transaction.findOneAndDelete({

        _id:req.params.id,

        userId,

      });



    if (!transaction) {

      return res.status(404).json({

        message:
          "Transaction not found",

      });

    }



    return res.status(200).json({

      message:
        "Transaction deleted successfully",

    });



  } catch(error) {

    console.error(error);


    return res.status(500).json({

      message:
        "Failed to delete transaction",

    });

  }

};