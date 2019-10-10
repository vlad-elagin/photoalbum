import { writable } from "svelte/store";

class AuthService {
  constructor() {
    this.store = writable(this.getCredentials());
  }

  /**
   * Get token via credentials and save it
   */
  async authenticate(credentials) {
    console.log("logging with", credentials);
    throw new Error("suka!");
  }

  getCredentials() {
    let store = localStorage.getItem("photoalbum-auth-credentials");
    if (store) {
      store = JSON.parse(store);
    }
    return store;
  }

  setCredentials(auth) {}
}

export default new AuthService();
