import gql from 'graphql-tag';
import { writable } from 'svelte/store';

import apolloClient from '../utils/apolloClient';

class AuthService {
  constructor() {
    this.store = writable(!!this.getCredentials());
  }

  /**
   * Get token via credentials and save it
   */
  async authenticate(credentials) {
    try {
      const { data: { login: { token }, errors } } = await apolloClient.mutate({
        variables: credentials,
        mutation: gql`
          mutation ($nickname: String!, $password: String!) {
            login(nickname: $nickname, password: $password) {
              token,
            }
          }
        `,
      });

      this.setCredentials(token);
      return Promise.resolve();
    } catch (err) {
      throw err;
    }
  }

  async register(credentials) {
    try {
      const { data } = await apolloClient.mutate({
        variables: credentials,
        mutation: gql`
          mutation ($nickname: String!, $password: String!) {
            register(nickname: $nickname, password: $password) {
              nickname
            }
          }
        `,
      });
      return Promise.resolve(data.register.nickname);
    } catch (err) {
      console.dir(err);
      throw err;
    }
  }

  getCredentials() {
    const token = localStorage.getItem("photoalbum-token");
    if (!token) {
      return null;
    }
    return token;
  }

  setCredentials(token) {
    this.store.set(true);
    localStorage.setItem('photoalbum-token', token);
  }

  removeCredentials() {
    this.store.set(false);
    localStorage.removeItem('photoalbum-token');
  }
}

export default new AuthService();
