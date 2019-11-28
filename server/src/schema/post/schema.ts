import { ObjectType, Field, ID } from "type-graphql";

import { User } from "@schema/user/schema";

@ObjectType('post')
export class Post {
  @Field(type => ID)
  public id: string;

  @Field()
  public photoSrc: string;

  @Field()
  public author: User;

  @Field()
  public description: string;

  @Field()
  public createdAt: Date;
}
