<template>
  <div class="container">
    <div class="jumbotron">
      <h2>Login</h2>
      <form action="/action_page.php">
        <div class="form-group">
          <label for="username">Username:</label>
          <input
            v-model="input.username"
            class="form-control"
            placeholder="Enter username"
            name="username"
          />
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input
            v-model="input.password"
            class="form-control"
            placeholder="Enter password"
            name="password"
          />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.mockAccount.username&&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "secure" });
        } else {
          console.log("The email and / or password is incorrect");
        }
      } else {
        console.log("A email and password must be present");
      }
    }
  }
};
</script>
