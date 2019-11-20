<template>
  <form @submit="submit">
    <fieldset>
      <input type="text" placeholder="Title" v-model="title" />
      <input type="text" placeholder="Director" v-model="director" />
      <input type="text" placeholder="Composer" v-model="composer" />
      <input type="text" placeholder="Release date" v-model="release_date" />
    </fieldset>
    <input class="button-primary" type="submit" value="Send" />
  </form>
</template>

<script>
export default {
  name: "AddMovie",
  data() {
    return {
      title: "",
      director: "",
      composer: "",
      release_date: ""
    };
  }
};
</script>
