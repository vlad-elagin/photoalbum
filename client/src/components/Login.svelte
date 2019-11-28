<script>
  import { navigate } from "svelte-routing";
  import AuthService from "../services/auth";
  import notify from "../utils/notification";

  let nickname = "";
  let password = "";
  let register = false;
  let confirmPassword = "";

  const submit = async () => {
    try {
      if (register) {
        if (password !== confirmPassword) {
          throw new Error("Passwords don't match");
        }
        const registeredNickname = await AuthService.register({
          nickname,
          password
        });
        notify(
          "success",
          `Welcome to Photoalbum, ${registeredNickname}. You can log in now.`
        );
        nickname = "";
        password = "";
        register = false;
        confirmPassword = "";
      } else {
        await AuthService.authenticate({
          nickname,
          password
        });
        navigate("/photos");
      }
    } catch (err) {
      if (err.graphQLErrors) {
        notify("danger", err.graphQLErrors);
      } else {
        notify("danger", err.message);
      }
    }
  };
</script>

<form on:submit|preventDefault={submit} id="login-form">
  <div class="form-group">
    <label for="email-field">Nickname</label>
    <input
      bind:value={nickname}
      name="nickname"
      required
      class="form-control"
      id="nickname-field" />
  </div>

  <div class="form-group">
    <label for="password-field">Password</label>
    <input
      bind:value={password}
      type="password"
      name="password"
      required
      class="form-control"
      id="password-field"
      autocomplete="off" />
  </div>

  <div class="form-check mb-3">
    <input
      class="form-check-input"
      type="checkbox"
      bind:checked={register}
      id="register-field" />
    <label for="register-field" class="form-check-label">Register</label>
  </div>

  {#if register === true}
    <div class="form-group">
      <label for="password-confirm-field">Confirm password</label>
      <input
        bind:value={confirmPassword}
        type="password"
        class="form-control"
        id="password-confirm-field"
        autocomplete="off" />
    </div>
  {/if}

  <button type="submit" class="btn btn-primary">Log in</button>
</form>
