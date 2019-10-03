import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
class Post {
  @Field(type => ID)
  public id: string;

  @Field()
  public photoUrl: string;

  @Field()
  public createdAt: Date;
}

export default Post;
