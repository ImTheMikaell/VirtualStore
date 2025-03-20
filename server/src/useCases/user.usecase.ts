import { UserCreate, UserRepository } from '../interface/user.interface.js';
import { userRepository } from '../repository/user.repository.js';

export class userUseCase {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new userRepository();
  }

  async create({ name, email, phone, password }: UserCreate) {
    try {
    } catch (error) {}
  }
}
