import { Router } from "express";
import {
  CreateUserController,
  GetUserController,
  UpdateUserController,
} from "./controllers";

const router = Router();

router.get("/user", new GetUserController().handle);
router.post("/user", new CreateUserController().handle);
router.put("/user/:id", new UpdateUserController().handle);

export default router;
