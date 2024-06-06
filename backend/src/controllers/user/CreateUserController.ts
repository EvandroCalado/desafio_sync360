import { Request, Response } from "express";
import { CreateUserService } from "../../services";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, age, street, district, state, bio, image } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      age,
      street,
      district,
      state,
      bio,
      image,
    });

    return res.json(user);
  }
}
