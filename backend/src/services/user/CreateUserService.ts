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

export const CreateUserService = {
  async execute({
    name,
    age,
    street,
    district,
    state,
    bio,
    image,
  }: UserRequest) {
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
  },
};
