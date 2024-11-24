<script lang="ts">
import { version } from "vue";

export default {
  name: "TestComponent",
  mounted() {

    console.log("Vue version (remote):", version);
    console.log('TestComponent');
  },
};
</script>

<template>
  <div class="test-component">
    TEST REMOTE COMPONENT3333
    <div>
    <slot>Default slot content</slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.test-component {
  font-size: 20px;
}
</style>
