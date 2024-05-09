import { Router } from "express";
import { CreateUserController } from "./controllers";

const router = Router();

router.post("/user", CreateUserController.handle);

export default router;
