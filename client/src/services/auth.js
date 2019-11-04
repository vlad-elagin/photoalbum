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
      const { data: { token } } = await apolloClient.mutate({
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
    console.log("registering with", credentials);
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
    localStorage.setItem('photoalbum-token', token);
  }
}

export default new AuthService();
