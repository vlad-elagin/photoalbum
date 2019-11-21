import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
class Post {
  @Field(type => ID)
  public id: string;

  @Field()
  public photoSrc: string;

  @Field()
  public author: string;

  @Field()
  public description: string;

  // @Field({ nullable: true })
  // public likedBy?: string[];

  @Field()
  public createdAt: Date;
}

export default Post;
