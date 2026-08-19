import { Response } from "express";

import Transaction from "../models/Transaction";

import { AuthRequest } from "../middleware/authMiddleware";


// Create a new transaction
export const createTransaction = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        message: "User not authenticated",
      });
    }

    const {
      type,
      amount,
      currency,
      categoryId,
      description,
      date,
    } = req.body;


    const transaction = await Transaction.create({
      userId,
      type,
      amount,
      currency,
      categoryId,
      description,
      date,
    });


    return res.status(201).json({
      message: "Transaction created successfully",
      transaction,
    });


  } catch (error) {

    console.error(error);

    return res.status(500).json({
      message: "Failed to create transaction",
    });

  }
};



// Get all transactions for logged-in user
export const getTransactions = async (
  req: AuthRequest,
  res: Response
) => {
  try {

    const userId = req.user?.id;


    if (!userId) {
      return res.status(401).json({
        message: "User not authenticated",
      });
    }


    const transactions = await Transaction.find({
      userId,
    })
      .populate(
        "categoryId",
        "name icon"
      )
      .sort({
        date: -1,
      });


    return res.status(200).json(
      transactions
    );


  } catch (error) {

    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch transactions",
    });

  }
};



// Get a single transaction
export const getTransactionById = async (
  req: AuthRequest,
  res: Response
) => {
  try {

    const userId = req.user?.id;


    if (!userId) {
      return res.status(401).json({
        message: "User not authenticated",
      });
    }


    const transaction =
      await Transaction.findOne({
        _id: req.params.id,
        userId,
      })
      .populate(
        "categoryId",
        "name icon"
      );


    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }


    return res.status(200).json(
      transaction
    );


  } catch (error) {

    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch transaction",
    });

  }
};



// Update transaction
export const updateTransaction = async (
  req: AuthRequest,
  res: Response
) => {
  try {

    const userId = req.user?.id;


    if (!userId) {
      return res.status(401).json({
        message: "User not authenticated",
      });
    }


    const transaction =
      await Transaction.findOneAndUpdate(

        {
          _id: req.params.id,
          userId,
        },

        req.body,

        {
          new: true,
          runValidators: true,
        }

      );


    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }


    return res.status(200).json({

      message:
        "Transaction updated successfully",

      transaction,

    });


  } catch (error) {

    console.error(error);

    return res.status(500).json({
      message: "Failed to update transaction",
    });

  }
};



// Delete transaction
export const deleteTransaction = async (
  req: AuthRequest,
  res: Response
) => {
  try {

    const userId = req.user?.id;


    if (!userId) {
      return res.status(401).json({
        message: "User not authenticated",
      });
    }


    const transaction =
      await Transaction.findOneAndDelete({

        _id: req.params.id,

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


  } catch (error) {

    console.error(error);

    return res.status(500).json({

      message:
        "Failed to delete transaction",

    });

  }
};