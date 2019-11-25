<template>
  <div class="flex pa1 justify-between nowrap orange">
    <div class="flex flex-fixed black">
      <div class="fw7 mr1">Moje Filmy</div>
      <ul class="navigation-list">
        <li :class="{ 'selected': $route.name == 'list'}">
          <router-link :to="{name: 'list'}">
            <i class="material-icons md-36">home</i>
            <span>_Start</span>
          </router-link>
        </li>
        <li>
          <router-link to="/list" class="ml1 no-underline black">Moja lista filmów</router-link>
        </li>

        <li>
          <router-link to="/create" class="ml1 no-underline black">Dodaj nowy film</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>
