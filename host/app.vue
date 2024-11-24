<script setup lang="ts">
import { version } from "vue";

console.log("Vue version (host):", version);
</script>

<template>
  <div>
    Host APP
    <nav>
      <ul>
      <router-link to="/">Home</router-link>
      <router-link to="/page">Remote</router-link>
      </ul>
    </nav>
    <br>
    <br>
    <nuxt-page />
<!--    <RemoteComponent>-->
<!--      Custom content in slot-->
<!--    </RemoteComponent>-->
  </div>
</template>
