<template>
  <div id="app">
   <Header></Header>
   <!-- <LogInForm></LogInForm> -->
   <!-- <Register></Register> -->
  </div>
</template>

<script>
import LogInForm from "modules/basic/Login.vue";
import Register from "./modules/basic/Register.vue";
import Header from "components/Frame/Header.vue";
//import AppBody from "./components/Frame/Body.vue";


export default {
  name: "app",
  components: {
    Header,
    //LogInForm
    // Register
  }
};
</script>

