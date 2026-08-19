import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";


// Routes

import authRoutes from "./routes/authRoutes";
import transactionRoutes from "./routes/transactionRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import budgetRoutes from "./routes/budgetRoutes";
import savingsGoalRoutes from "./routes/savingsGoalRoutes";
import recurringRoutes from "./routes/recurringRoutes";
import notificationRoutes from "./routes/notificationRoutes";
import reportRoutes from "./routes/reportRoutes";



// Load environment variables

dotenv.config();



// Initialize Express

const app = express();



// Middleware


app.use(

  cors({

    origin:

      process.env.CLIENT_URL ||

      "http://localhost:3000",

    credentials: true

  })

);



app.use(

  express.json()

);



app.use(

  cookieParser()

);





// Health check route

app.get(

  "/api/health",

  (req,res)=>{


    res.status(200).json({

      message:"Money Manager API running",

      status:"success"

    });


  }

);





// =======================
// API ROUTES
// =======================



app.use(

  "/api/auth",

  authRoutes

);



app.use(

  "/api/transactions",

  transactionRoutes

);



app.use(

  "/api/categories",

  categoryRoutes

);



app.use(

  "/api/budgets",

  budgetRoutes

);



console.log("Loading savings goal routes");


app.use(
  "/api/savings-goals",
  savingsGoalRoutes
);


app.use(

  "/api/recurring",

  recurringRoutes

);



app.use(

  "/api/notifications",

  notificationRoutes

);



app.use(

  "/api/reports",

  reportRoutes

);





// Default route

app.get(

  "/",

  (req,res)=>{


    res.send(

      "Money Manager Backend Running"

    );


  }

);







// Error handler


app.use(

  (

    err:any,

    req:express.Request,

    res:express.Response,

    next:express.NextFunction

  )=>{


    console.error(err);



    res.status(500).json({

      message:

      "Server error"

    });


  }

);








// MongoDB connection


const connectDB = async()=>{


  try{


    await mongoose.connect(

      process.env.MONGO_URI as string

    );


    console.log(

      "MongoDB connected"

    );


  }

  catch(error){


    console.error(

      "MongoDB connection failed",

      error

    );


    process.exit(1);


  }


};







const PORT =

process.env.PORT || 5000;





connectDB()

.then(()=>{


  app.listen(

    PORT,

    ()=>{


      console.log(

        `Server running on port ${PORT}`

      );


    }

  );


});