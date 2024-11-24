<script setup lang="ts">
import {RouterView} from 'vue-router'
import TestComponent from './components/TestComponent.vue'
</script>

<template>
  <div class="wrapper">
    <TestComponent/>
  </div>

  <div>
    <router-link to="/page1">Page1</router-link>
    <router-link to="/page2">Page2</router-link>
  </div>

  <div class="pages">
    <RouterView/>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
