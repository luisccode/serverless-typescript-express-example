import serverless from "serverless-http";
import express, { Request, Response, NextFunction } from "express";
const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/user", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "Hello from user!",
  });
});

export const handler = serverless(app);
