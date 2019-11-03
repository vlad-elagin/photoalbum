import { Resolver, Query, Arg, Authorized } from "type-graphql";

import User from "@schema/user/schema";
import UserService from "@services/user";
import { ROLE_SELF, ROLE_AUTHORIZED } from "@server/utils";

@Resolver(User)
class UserResolver {
  @Authorized([ROLE_SELF, ROLE_AUTHORIZED])
  @Query(returns => User)
  public user(@Arg("id") id: string) {
    return UserService.getUser(id);
  }

  // TEST ONLY, REMOVE LATER
  @Query(returns => [User])
  public async getUsers() {
    const users = await UserService.getAll();
    return users;
  }
}

export default UserResolver;
