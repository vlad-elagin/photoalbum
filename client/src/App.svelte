<script>
  import { Router, Route } from "svero";
  import Header from "./components/Header.svelte";
  import Login from "./components/Login.svelte";
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

<main class="d-flex flex-column">
  <Header />
  <div class="d-flex align-items-center justify-content-center flex-grow-1">
    <Router>
      <Route path="/login" component={Login} />
    </Router>
  </div>
</main>
