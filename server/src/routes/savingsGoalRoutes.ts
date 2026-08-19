import express from "express";


import {

  getGoals,

  createGoal,

  deleteGoal,

  addMoney

}

from "../controllers/savingsGoalController";


import {

  protect

}

from "../middleware/authMiddleware";



const router = express.Router();





// Test route - remove later

router.get(

  "/test",

  (req,res)=>{


    res.json({

      message:

      "Savings goals route working"

    });


  }

);





// Get all savings goals

router.get(

  "/",

  protect,

  getGoals

);





// Create savings goal

router.post(

  "/",

  protect,

  createGoal

);





// Delete savings goal

router.delete(

  "/:id",

  protect,

  deleteGoal

);





// Add money to savings goal

router.patch(

  "/:id/add-money",

  protect,

  addMoney

);





export default router;