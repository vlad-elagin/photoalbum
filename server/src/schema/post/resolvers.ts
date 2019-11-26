import { Resolver, Query } from "type-graphql";

import { Post } from "@schema/post/schema";
import PostService from "@services/post";

console.log('exporting post resolver');

@Resolver()
export class PostResolver {
  @Query(returns => [Post])
  public posts() {
    return PostService.getPosts();
  }
}
