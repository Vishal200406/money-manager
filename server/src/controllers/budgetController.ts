import { Response } from "express";

import Budget from "../models/Budget";
import Transaction from "../models/Transaction";

import {
  AuthRequest
} from "../middleware/authMiddleware";



// Create Budget
export const createBudget = async (
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



    const budget = await Budget.create({

      userId,

      ...req.body,

    });



    return res.status(201).json({

      message:
        "Budget created successfully",

      budget,

    });



  } catch (error) {


    console.error(
      "Create budget error:",
      error
    );


    return res.status(500).json({

      message:
        "Failed to create budget",

    });

  }

};






// Get Budgets With Spending Information
export const getBudgets = async (

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



    const budgets = await Budget.find({

      userId,

    })
    .populate(
      "categoryId",
      "name icon"
    );





    const updatedBudgets = await Promise.all(

      budgets.map(async (budget) => {



        const startDate = new Date(

          budget.year,

          budget.month - 1,

          1

        );



        const endDate = new Date(

          budget.year,

          budget.month,

          1

        );





        const transactions = await Transaction.find({

          userId,

          categoryId:
            budget.categoryId._id,

          type:
            "expense",


          date: {

            $gte:
              startDate,

            $lt:
              endDate,

          },


        });





        const spent = transactions.reduce(

          (
            total,

            transaction

          ) => {


            return total + transaction.amount;


          },

          0

        );





        const remaining =
          budget.amount - spent;




        const percentage =

          budget.amount > 0

            ? Math.round(

                (spent / budget.amount) * 100

              )

            : 0;





        return {


          ...budget.toObject(),


          spent,


          remaining,


          percentage,


        };



      })

    );





    return res.json(

      updatedBudgets

    );




  } catch (error) {



    console.error(

      "Get budgets error:",

      error

    );



    return res.status(500).json({

      message:

        "Failed to fetch budgets",

    });



  }


};








// Delete Budget
export const deleteBudget = async (

  req: AuthRequest,

  res: Response

) => {


  try {


    const userId = req.user?.id;




    await Budget.findOneAndDelete({

      _id:
        req.params.id,


      userId,


    });





    return res.json({

      message:
        "Budget deleted",

    });




  } catch (error) {



    console.error(

      "Delete budget error:",

      error

    );



    return res.status(500).json({

      message:
        "Failed to delete budget",

    });



  }


};