import gql from 'graphql-tag';

import apolloClient from '../utils/apolloClient';

class PostsService {
  async getPhotos() {

    const { data, errors } = await apolloClient.query({
      query: gql`
        query {
          posts {
            id,
            photoSrc,
            createdAt,
            description,
            author
          }
        }
      `,
    });

    if (errors) {
      return Promise.reject(errors[0].message);
    }

    return Promise.resolve(data.posts)
  }
}

export default new PostsService();
