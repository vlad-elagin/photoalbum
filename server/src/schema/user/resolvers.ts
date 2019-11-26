import { Resolver, Query, Arg, Authorized } from "type-graphql";

import { User } from "@schema/user/schema";
import UserService from "@services/user";
import { ROLE_SELF, ROLE_AUTHORIZED } from "@server/utils";

@Resolver()
export class UserResolver {
  @Authorized()
  @Query(returns => User)
  public user(@Arg("id") id: string) {
    return UserService.getUser(id);
  }
}