import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import router from "./routes";

const app = express();

export class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

const errorhandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(err);
  }

  const statusCode = err.statusCode || 500;

  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({ error: message });
};

app.use(express.json());
app.use(router);
app.use(cors());

app.use(errorhandler);

app.listen(3333, () => console.log("Listening on port 3000"));
