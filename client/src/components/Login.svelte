<script>
  import { getNotificationsContext } from "svelte-notifications";
  import AuthService from "../services/auth";

  let email = "";
  let password = "";

  const submit = async event => {
    event.preventDefault();
    try {
      await AuthService.authenticate({
        email,
        password
      });
    } catch (err) {
      const { addNotification } = getNotificationsContext();
      addNotification({
        text: err.message,
        position: "bottom-right",
        removeAfter: 5 * 1000,
        type: "danger"
      });
    }
  };
</script>

<form on:submit={submit}>
  <div class="form-group">
    <label for="email-field">Email address</label>
    <input
      bind:value={email}
      type="email"
      required
      class="form-control"
      id="email-field"
      placeholder="email@address.com" />
  </div>

  <div class="form-group">
    <label for="password-field">Password</label>
    <input
      bind:value={password}
      type="password"
      required
      class="form-control"
      id="password-field"
      placeholder="Password"
      autocomplete="off" />
  </div>

  <button type="submit" class="btn btn-primary">Log in</button>
</form>
