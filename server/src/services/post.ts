import db from "@server/database";
import { IPost } from "@models/post";

const { Post, User } = db.models;

class PostService {
  public getPosts(): Promise<IPost[]> {
    return Post.findAll({
      raw: true,
      include: [{
        model: User,
        as: 'author'
      }],
      nest: true,
    });
  }

  public async removePost(id: string): Promise<IPost> {
    const post = await Post.findByPk(id, {
      include: [{
        model: User,
        as: 'author'
      }]
    });
    if (!post) {
      throw new Error('Cant find a post with specified ID');
    }

    const removedPost = post.dataValues;
    await post.destroy();
    return Promise.resolve(removedPost);
  }

  public createPost(postData: IPost): Promise<IPost> {
    return Post.create({
      ...postData,
      createdAt: new Date(),
    });
  }
}

export default new PostService();
