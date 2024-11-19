<script setup lang="ts">
import { version } from "vue";

console.log("Vue version (host):", version);
</script>

<template>
  <div>
    Host APP
    <br>
    <br>
    <RemoteComponent>
      Custom content in slot
    </RemoteComponent>
  </div>
</template>
