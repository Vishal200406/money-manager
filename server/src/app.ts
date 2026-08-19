import express from "express";
import cors from "cors";
import helmet from "helmet";

import { env } from "./config/env";
import apiRoutes from "./routes";

const app = express();

// Security middleware
app.use(helmet());

// Allow frontend communication
app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);

// Parse JSON requests
app.use(express.json());

// API routes
app.use("/api", apiRoutes);

// Basic test route
app.get("/", (_req, res) => {
  res.json({
    message: "Money Manager API is running",
    environment: env.NODE_ENV,
  });
});

export default app;