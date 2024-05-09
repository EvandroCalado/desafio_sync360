import cors from "cors";
import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return res.status(400).json({
      message: error.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

app.listen(3333, () => console.log("Listening on port 3333"));
