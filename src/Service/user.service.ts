import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { UserRepository } from "../Repositories/user.repository";

@Service()
export class UserService {
  constructor(@InjectRepository() private userRepository: UserRepository) {}

  async getUsers(limit: number = 10, page: number = 1) {
    return this.userRepository.findUsers();
  }
}
