import { EntityRepository, Repository } from "typeorm";
import { Users } from "../models/users.model";

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {
  async findUsers(page?: number, limit?: number) {
    return "Equisde moment";
  }
}
