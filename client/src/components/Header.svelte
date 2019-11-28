<script>
  import { link } from 'svelte-routing';
  import AuthService from '../services/auth';

  let isLogged = null;
  AuthService.store.subscribe(val => isLogged = val);

  const logOut = () => {
    AuthService.removeCredentials();
  };
</script>

<style>
  header {
    background-color: var(--primary);
    height: 60px;
    padding: 0 15px;
  }
</style>

<header class="d-flex justify-content-between align-items-center">
  <span class="text-light font-weight-bold">Photoalbum</span>

  {#if isLogged === true}
    <a
      href="/login"
      on:click={logOut}
      class="btn btn-outline-light"
      use:link
    >Log Out</a>
  {:else}
    <a
      href="/login"
      class="btn btn-outline-light"
      use:link
    >Log In</a>
  {/if}
</header>
