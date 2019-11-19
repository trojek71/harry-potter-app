<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <movies-list />
  </div>
</template>

<script>
import MoviesList from "./components/MoviesList.vue";

export default {
  name: "app",
  components: {
    MoviesList
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
