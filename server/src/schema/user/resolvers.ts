import { Resolver, Query, Arg, Authorized } from "type-graphql";

import { User } from "@schema/user/schema";
import UserService from "@services/user";

@Resolver()
export class UserResolver {
  @Authorized()
  @Query(returns => User)
  public user(@Arg("id") id: string) {
    return UserService.getUser(id);
  }
}