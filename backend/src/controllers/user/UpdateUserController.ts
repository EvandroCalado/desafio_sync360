import { Request, Response } from "express";
import { UpdateUserService } from "../../services";

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    const user = await new UpdateUserService().execute(id, req.body);

    return res.json(user);
  }
}
