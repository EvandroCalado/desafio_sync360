import prisma from "../../prisma";

export class GetUserService {
  async execute() {
    const user = await prisma.user.findFirst();

    return user;
  }
}
