<script>
  export let notification;
</script>

<style>
  .alert {
    margin-right: 1rem;
  }
</style>

<div class={`alert alert-${notification.type}`} role="alert">
  {notification.text}
</div>
