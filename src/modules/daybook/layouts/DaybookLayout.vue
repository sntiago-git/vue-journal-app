<template>
  
  <nav-bar />

  <div class="d-flex">
    <div class="col-4"><entry-list/></div>
    <div class="col">
        <router-view/>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";

export default {
  name: "DaybookLayout",
  components: {
    NavBar: defineAsyncComponent(() => import("../components/NavBar.vue")),
    EntryList: defineAsyncComponent(() => import("../components/EntryList.vue")),
  },
};
</script>

<style>
</style>