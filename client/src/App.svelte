<script>
  import Header from "./components/Header.svelte";
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
  <div
    class="content d-flex align-items-center justify-content-center flex-grow-1">
    hi i am content
  </div>
</main>
