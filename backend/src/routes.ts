import { Request, Response, Router } from "express";
import { CustomError } from "./server";

const router = Router();

router.get("/user", (req: Request, res: Response) => {
  throw new CustomError("Something went wrong", 400);
});

export default router;
