import Vue from "vue";
import Router from "vue-router";

// 1
import MovieList from "../components/MoviesList";
import AddMovie from "../components/AddMovie";

Vue.use(Router);

export default new Router({
  // 2
  routes: [
    {
      path: "/",
      component: MovieList
    },
    {
      path: "/create",
      component: AddMovie
    }
  ],
  // 3
  mode: "history"
});
