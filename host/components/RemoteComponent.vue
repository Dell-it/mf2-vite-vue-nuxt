<script setup lang="ts">
import {getInstance, init, loadRemote} from "@module-federation/enhanced/runtime";
import {configuration} from "~/module-federation.config";
import {loadRemoteModule} from "~/components/customLoader/loadRemoteModule";
import LoadingComponent from "~/components/LoadingComponent.vue";
import SimpleComponent from "~/components/SimpleComponent.vue";

const inst = getInstance()

//todo: вынесли init отсюда
if (!inst) {
  init(configuration)
}

const RComponent =
    loadRemoteModule({
      loader: () => loadRemote("manifest/exportApp"),
      asyncComponentOptions: {
        loadingComponent: LoadingComponent,
        errorComponent: SimpleComponent,
        delay: 0,
        suspensible: false,
      }
    })

</script>

<template>
    <RComponent/>
</template>

<style scoped>

</style>