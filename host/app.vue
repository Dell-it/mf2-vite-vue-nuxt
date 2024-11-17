<script setup lang="ts">
import { version } from "vue";

console.log("Vue version (host):", version);
</script>

<template>
  <div>
    <RemoteComponent>
      Custom content in slot
    </RemoteComponent>
  </div>
</template>
