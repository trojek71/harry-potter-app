<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <img alt="Vue logo" src="./assets/logo.png" />
    <add-movie />
    <movies-list />
  </div>
</template>

<script>
import MoviesList from "./components/MoviesList.vue";
import AddMovie from "./components/AddMovie.vue";
import AppHeader from "./components/AppHeader";
export default {
  name: "app",
  components: {
    AppHeader,
    MoviesList,
    AddMovie
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
