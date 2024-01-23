<template>
  <nav-bar></nav-bar>
  <home-page></home-page>
  <router-view></router-view>
</template>
<script>
// @ is an alias to /src
import NavBar from "./components/NavBar.vue";
import HomePage from "./views/HomePage.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HomePage,
  },
};
</script>
