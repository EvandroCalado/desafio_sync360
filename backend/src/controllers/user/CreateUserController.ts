import { Request, Response } from "express";
import { CreateUserService } from "../../services";

export const CreateUserController = {
  async handle(req: Request, res: Response) {
    const { name, age, street, district, state, bio, image } = req.body;

    const user = await CreateUserService.execute({
      name,
      age,
      street,
      district,
      state,
      bio,
      image,
    });

    return res.json(user);
  },
};