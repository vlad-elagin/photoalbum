import gql from 'graphql-tag';

import apolloClient from '../utils/apolloClient';

class PostsService {
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

    return Promise.resolve(data.posts);
  }

  async removePost(postId) {
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

    console.log(data);
    console.log(errors);
    // TODO close modal and reload posts
  }
}

export default new PostsService();
