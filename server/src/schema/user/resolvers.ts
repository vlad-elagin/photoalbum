import { Resolver, Query, Arg } from "type-graphql";

import User from "@schema/user/schema";
import UserService from "@services/user";

@Resolver(User)
class UserResolver {
  @Query(returns => User)
  public me(@Arg("id") id: string) {
    return UserService.getUser(id);
  }
}

export default UserResolver;
