import gql from 'graphql-tag';
import { writable } from 'svelte/store';

import apolloClient from '../utils/apolloClient';

class PostsService {
  constructor() {
    this.store = writable(null);
  }

  async getPosts() {
    const { data, errors } = await apolloClient.query({
      query: gql`
        query {
          posts {
            id,
            photoSrc,
            createdAt,
            description,
            author {
              nickname
            }
          }
        }
      `,
    });

    if (errors) {
      return Promise.reject(errors[0].message);
    }

    this.store.set(data.posts);
    return Promise.resolve();
  }

  async removePost(postId) {
    try {
      const { data, errors } = await apolloClient.mutate({
        variables: { postId },
        mutation: gql`
        mutation($postId: String!) {
          removePost(postId: $postId) {
            description
          }
        }
      `,
      });

      if (!data && errors) {
        throw errors[0].message;
      }

      await this.getPosts();
      return Promise.resolve(data.removePost);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default new PostsService();
