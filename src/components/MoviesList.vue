<template>
  <div>
    <movie-item v-for="movie in movies" :key="movie.id" :movie="movie"></movie-item>
  </div>
</template>

<script>
import MovieItem from "./MovieItem";
export default {
  name: "MoviesList",
  components: { MovieItem },
  data() {
    return {
      movies: [
        {
          id: "1d5e7496-7120-4c59-8c21-72c728a73f85",
          title: "Harry Potter and the Order of the Phoenix",
          director: "David Yates",
          composer: "Nicholas Hopper",
          release_date: "2007-07-11"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
