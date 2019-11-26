import { Resolver, Query, Authorized, Arg, Mutation } from "type-graphql";

import { Post } from "@schema/post/schema";
import PostService from "@services/post";
import { ROLE_SELF } from '@server/utils';

@Resolver()
export class PostResolver {
  @Authorized()
  @Query(returns => [Post])
  public posts() {
    return PostService.getPosts();
  }

  @Authorized([ROLE_SELF])
  @Mutation(returns => Post)
  public async removePost(
    @Arg('postId') postId: string
  ): Promise<Post> {
    console.log('removing post with id', postId);
    return PostService.removePost(postId);
  }
}
