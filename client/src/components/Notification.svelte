<script>
  import { onDestroy } from "svelte";
  import { getNotificationsContext } from "svelte-notifications";
  import { fade } from "svelte/transition";

  const { removeNotification } = getNotificationsContext();

  export let notification = {};
  const { id, removeAfter } = notification;

  const removeNotificationHandler = () => removeNotification(id);
  let timeout = null;

  if (removeAfter) {
    timeout = setTimeout(removeNotificationHandler, removeAfter);
  }

  onDestroy(() => {
    if (removeAfter && timeout) clearTimeout(timeout);
  });
</script>

<style>
  .alert {
    margin-right: 1rem;
  }
</style>

<div class={`alert alert-${notification.type}`} in:fade out:fade role="alert">
  {notification.text}
</div>
