import { Resolver, Query, Arg } from "type-graphql";

import User from "@schema/user/schema";
import UserService from "@services/user";

@Resolver(User)
class UserResolver {
  constructor(private userService: UserService) {}

  @Query(returns => User)
  public me(@Arg("id") id: string) {
    return this.userService.getUser(id);
  }
}

export default UserResolver;
