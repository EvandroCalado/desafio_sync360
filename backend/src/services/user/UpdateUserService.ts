import prisma from "../../prisma";

interface UserRequest {
  user: {
    name: string;
    age: number;
    street: string;
    district: string;
    state: string;
    bio: string;
  };
}

export class UpdateUserService {
  async execute(id: number, user: UserRequest) {
    try {
      const existingUser = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!existingUser) {
        throw new Error("User not found");
      }

      const userUpdated = await prisma.user.update({
        where: {
          id,
        },
        data: {
          ...user,
        },
      });

      return userUpdated;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
}
