import Vue from "vue";
import Router from "vue-router";
// 1
import MovieList from "../components/MoviesList";
import AddMovie from "../components/AddMovie";
import Start from "../components/StartComponent.vue"

Vue.use(Router);

export default new Router({
  // 2
  routes: [
    {path: "/start", name: "start", component: Start },
    {
      path: "/list",
      name: "list",
      component: MovieList
    },
    {
      path: "/create",
      name: "create",
      component: AddMovie
    }
  ],
  // 3
  //mode: "history"
});
