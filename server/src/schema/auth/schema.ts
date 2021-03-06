import { ObjectType, Field } from "type-graphql";

import { User } from "@schema/user/schema";

@ObjectType('auth')
export class Auth {
  @Field()
  public token: string;

  @Field()
  public user: User;
}
