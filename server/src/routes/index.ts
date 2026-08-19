import { Router } from "express";


import authRoutes from "./authRoutes";
import transactionRoutes from "./transactionRoutes";
import categoryRoutes from "./categoryRoutes";
import budgetRoutes from "./budgetRoutes";
import analyticsRoutes from "./analyticsRoutes";
import reportRoutes from "./reportRoutes";
import recurringRoutes from "./recurringRoutes";
import savingsGoalRoutes from "./savingsGoalRoutes";
import notificationRoutes from "./notificationRoutes";
import userRoutes from "./userRoutes";
import exportRoutes from "./exportRoutes";



const router = Router();





// Health check

router.get(

  "/health",

  (_req, res) => {

    res.status(200).json({

      status: "OK",

      service: "Money Manager API"

    });

  }

);







// Authentication routes

router.use(

  "/auth",

  authRoutes

);







// Transaction routes

router.use(

  "/transactions",

  transactionRoutes

);







// Category routes

router.use(

  "/categories",

  categoryRoutes

);







// Budget routes

router.use(

  "/budgets",

  budgetRoutes

);







// Analytics routes

router.use(

  "/analytics",

  analyticsRoutes

);







// Reports routes

router.use(

  "/reports",

  reportRoutes

);







// Recurring payment routes

router.use(

  "/recurring",

  recurringRoutes

);







// Savings goals routes

router.use(

  "/savings-goals",

  savingsGoalRoutes

);







// Notification routes

router.use(

  "/notifications",

  notificationRoutes

);







// User routes

router.use(

  "/users",

  userRoutes

);







// Export routes

router.use(

  "/exports",

  exportRoutes

);






export default router;