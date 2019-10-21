import { Resolver, Query, Arg, Authorized, Mutation } from "type-graphql";

import User from "@schema/user/schema";
import UserService from "@services/user";
import { ROLE_SELF, ROLE_AUTHORIZED } from "@server/utils";

interface IAuthCredentials {
  token: string;
  user: User;
}

@Resolver(User)
class UserResolver {
  // TODO
  @Authorized(ROLE_SELF)
  @Query(returns => User)
  public me(@Arg("token") token: string) {
    return UserService.getSelf();
  }

  @Authorized([ROLE_SELF, ROLE_AUTHORIZED])
  @Query(returns => User)
  public user(@Arg("id") id: string) {
    return UserService.getUser(id);
  }

  @Mutation(returns => User)
  public async login(
    @Arg("nickname") nickname: string,
    @Arg("password") password: string
  ): Promise<IAuthCredentials> {
    const user = await UserService.getUserByNickname(nickname);
    // check password, generate token
    return {
      token: 'example token',
      user,
    };
  }

  @Mutation(returns => User)
  public async register(
    @Arg("nickname") nickname: string,
    @Arg("password") password: string
  ): Promise<User> {
    console.log('registering');
    return UserService.register(nickname, password);
  }
}

export default UserResolver;
