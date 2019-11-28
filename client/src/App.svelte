<script>
  import { Router, Route, navigate } from "svelte-routing";
  import Notifications from "svelte-notifications";

  import Notification from "./components/Notification.svelte";
  import Header from "./components/Header.svelte";
  import Login from "./components/Login.svelte";
  import Posts from "./components/Posts.svelte";

  import AuthService from "./services/auth";

  const credentials = AuthService.getCredentials();

  if (credentials === null) {
    navigate("/login", { replace: true });
  } else {
    navigate("/photos", { replace: true });
  }
</script>

<style type="text/scss">
  :global(html, body) {
    width: 100%;
    height: 100%;
  }

  :global(.modal) {
    display: block;
    background-color: rgba(0,0,0, .8);
  }

  :global(.notifications) {
    z-index: 9999;
    position: fixed;
  }

  main {
    width: 100%;
    min-height: 100%;
    background-color: darken(#fff, 5%);
  }
</style>

<Notifications item={Notification}>
  <main class="d-flex flex-column">
    <Header />
    <div class="d-flex align-items-stretch justify-content-center flex-grow-1">
      <Router>
        <Route path="/login"><Login /></Route>
        <Route path="/photos"><Posts /></Route>
      </Router>
    </div>
  </main>
</Notifications>
