<script>
  import { getNotificationsContext } from "svelte-notifications";
  import AuthService from "../services/auth";

  let nickname = "";
  let password = "";

  const submit = async event => {
    event.preventDefault();
    try {
      await AuthService.authenticate({
        nickname,
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
    <label for="email-field">Nickname</label>
    <input
      bind:value={nickname}
      required
      class="form-control"
      id="nickname-field"
      placeholder="Your nickname" />
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
