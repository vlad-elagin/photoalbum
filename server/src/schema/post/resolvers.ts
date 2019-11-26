import { Resolver, Query, Authorized } from "type-graphql";

import { Post } from "@schema/post/schema";
import PostService from "@services/post";

@Resolver()
export class PostResolver {
  @Authorized()
  @Query(returns => [Post])
  public posts() {
    return PostService.getPosts();
  }
}
