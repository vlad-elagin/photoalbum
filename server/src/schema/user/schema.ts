import { ObjectType, Field, ID } from "type-graphql";

@ObjectType('user')
export class User {
  @Field(type => ID)
  public id: string;

  @Field()
  public nickname: string;

  // TODO we can probably remove @Field to hide password from client
  // @Field({ nullable: true })
  public password: string;

  @Field({ nullable: true })
  public name?: string;

  @Field({ nullable: true })
  public about?: string;

  @Field()
  public createdAt: Date;
}


