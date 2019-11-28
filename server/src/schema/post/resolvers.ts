import {
  Resolver,
  Query,
  Authorized,
  Arg,
  Mutation,
  Ctx
} from "type-graphql";

import { Post } from "@schema/post/schema";
import PostService from "@services/post";
import { IContext } from '@utils/authChecker';

@Resolver()
export class PostResolver {
  @Authorized()
  @Query(returns => [Post])
  public posts() {
    return PostService.getPosts();
  }

  @Authorized()
  @Mutation(returns => Post)
  public removePost(
    @Arg('postId') postId: string
  ): Promise<Post> {
    return PostService.removePost(postId);
  }

  @Authorized()
  @Mutation(returns => Post)
  public createPost(
    @Arg('imageSrc') imageSrc: string,
    @Ctx() ctx: IContext,
    @Arg('description', { nullable: true }) description: string,
  ): Promise<Post> {
    return PostService.createPost({
      description: description || '',
      photoSrc: imageSrc,
      // mutation is authorized-only
      // @ts-ignore
      authorId: ctx.user.id,
    });
  }
}
