import { Resolver, Query } from "type-graphql";

import Post from "@schema/post/schema";
import PostService from "@services/post";

@Resolver(Post)
class PostResolver {
  @Query(returns => [Post])
  public posts() {
    return PostService.getPosts();
  }
}

export default PostResolver;
