import { User, UserCreate, UserRepository} from "../interface/user.interface.js";
import { prisma } from "../config/db.js";

export class userRepository implements UserRepository {

  async create(data: UserCreate): Promise<User> {
    const result = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password
      }
    })
    return result
  }
}