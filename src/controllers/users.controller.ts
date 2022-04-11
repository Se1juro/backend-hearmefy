import { Body, JsonController, Post } from "routing-controllers";
import { UserService } from "../Service/user.service";

@JsonController("/api/users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/")
  getUsers(@Body() data: any) {
    return this.userService.getUsers();
  }
}
