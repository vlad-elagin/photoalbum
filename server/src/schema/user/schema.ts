import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
class User {
  @Field(type => ID)
  public id: string;

  @Field()
  public nickname: string;

  @Field({ nullable: false })
  public password: string;

  @Field({ nullable: true })
  public name?: string;

  @Field({ nullable: true })
  public about?: string;

  @Field()
  public createdAt: Date;
}

export default User;
