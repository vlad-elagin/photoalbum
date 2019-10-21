import { writable } from "svelte/store";
import gql from 'graphql-tag';

import apolloClient from '../utils/apolloClient';

class AuthService {
  constructor() {
    this.store = writable(this.getCredentials());
  }

  /**
   * Get token via credentials and save it
   */
  async authenticate(credentials) {
    console.log("logging with", credentials);
    try {
      const res = await apolloClient.mutate({
        variables: credentials,
        mutation: gql`
          mutation ($nickname: String!, $password: String!) {
            login(nickname: $nickname, password: $password)
          }
        `,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  getCredentials() {
    let store = localStorage.getItem("photoalbum-auth-credentials");
    if (store) {
      store = JSON.parse(store);
    }
    return store;
  }

  setCredentials(auth) { }
}

export default new AuthService();
