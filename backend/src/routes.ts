import { Router } from "express";
import { CreateUserController, UpdateUserController } from "./controllers";

const router = Router();

router.post("/user", new CreateUserController().handle);
router.put("/user/:id", new UpdateUserController().handle);

export default router;
