<template>
  <div class="flex pa1 justify-between nowrap orange">
    <div class="flex flex-fixed black">
      <div class="fw7 mr1">Moje Filmy</div>
      <router-link to="/" class="ml1 no-underline black"
        >Moja lista filmów</router-link
      >
      <div class="ml1">|</div>
      <router-link to="/create" class="ml1 no-underline black"
        >Dodaj nowy film</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>
