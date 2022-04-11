import { Service } from "typedi";
import { UserRepository } from "../Repositories/user.repository";

@Service()
export class UserService {
  constructor() {}

  async getUsers(limit: number = 10, page: number = 1) {
    return await UserRepository.findUsers();
  }
}
