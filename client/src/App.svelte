<script>
  import { Router, Route, navigateTo } from "svero";
  import Notifications from "svelte-notifications";

  import Notification from "./components/Notification.svelte";
  import Header from "./components/Header.svelte";
  import Login from "./components/Login.svelte";
  import Photos from "./components/Photos.svelte";

  import AuthService from "./services/auth";

  const credentials = AuthService.getCredentials();

  if (credentials === null) {
    navigateTo("/login");
  } else {
    navigateTo("/photos");
  }
</script>

<style type="text/scss">
  :global(html, body) {
    width: 100%;
    height: 100%;
  }

  main {
    width: 100%;
    height: 100%;
  }
</style>

<Notifications item={Notification}>
  <main class="d-flex flex-column">
    <Header />
    <div class="d-flex align-items-center justify-content-center flex-grow-1">
      <Router path="/">
        <Route path="/login" component={Login} />
        <Route path="/photos" component={Photos} />
      </Router>
    </div>
  </main>
</Notifications>
