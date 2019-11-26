import db from "@server/database";
import { IPost } from "@models/post";

const { Post } = db.models;

class PostService {
  public getPosts(): Promise<IPost[]> {
    return Post.findAll({ raw: true });
  }
}

export default new PostService();
