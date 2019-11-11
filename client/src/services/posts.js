import gql from 'graphql-tag';

import apolloClient from '../utils/apolloClient';

class PostsService {
  getPhotos() {
    console.log('getting photos');
    return apolloClient.query({
      query: gql`
        query {
          posts {
            posts,
            count
          }
        }
      `,
    });
  }
}

export default new PostsService();
