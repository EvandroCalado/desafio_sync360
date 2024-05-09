import { Request, Response } from "express";
import { GetUserService } from "../../services";

export class GetUserController {
  async handle(req: Request, res: Response) {
    const user = await new GetUserService().execute();

    return res.json(user);
  }
}
