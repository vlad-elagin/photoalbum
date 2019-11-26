import gql from 'graphql-tag';

import apolloClient from '../utils/apolloClient';

class PostsService {
  getPhotos() {
    return apolloClient.query({
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
  }
}

export default new PostsService();
