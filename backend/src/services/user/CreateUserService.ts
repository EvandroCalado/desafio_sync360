import prisma from "../../prisma";

interface UserRequest {
  name: string;
  age: number;
  street: string;
  district: string;
  state: string;
  bio: string;
  image: string;
}

export class CreateUserService {
  async execute({
    name,
    age,
    street,
    district,
    state,
    bio,
    image,
  }: UserRequest) {
    try {
      if (!name) throw new Error("Name is required");

      const userAlreadyExists = await prisma.user.findFirst({
        where: {
          name,
        },
      });

      if (userAlreadyExists) throw new Error("User already exists");

      const user = await prisma.user.create({
        data: {
          name,
          age,
          street,
          district,
          state,
          bio,
          image,
        },
      });

      return user;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
}
