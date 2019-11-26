import { Resolver, Arg, Mutation } from "type-graphql";
import jwt from 'jsonwebtoken';

import { User } from "@schema/user/schema";
import { Auth } from '@schema/auth/schema';
import UserService from "@services/user";

export interface IAuthCredentials {
  token: string;
  user: User;
}

@Resolver()
export class AuthResolver {
  @Mutation(returns => Auth)
  public async login(
    @Arg("nickname") nickname: string,
    @Arg("password") password: string
  ): Promise<IAuthCredentials> {
    const user = await UserService.getUserByNickname(nickname);
    if (!user) {
      throw new Error('User not found.');
    }

    const passwordCorrect = await user.checkPassword(password);
    if (!passwordCorrect) {
      throw new Error('Password is incorrect');
    }
    // TODO generate token
    const { JWT_SECRET } = process.env;
    const token = jwt.sign({
      id: user.id,
      nickname: user.nickname,
    }, JWT_SECRET);
    const response: IAuthCredentials = {
      token,
      user,
    };
    return response;
  }

  @Mutation(returns => User)
  public async register(
    @Arg("nickname") nickname: string,
    @Arg("password") password: string
  ): Promise<User> {
    let user;
    try {
      user = await UserService.register(nickname, password);
    } catch (err) {
      throw new Error(err);
    }
    return user;
  }
}
