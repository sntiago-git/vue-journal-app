<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>

  <!-- Boton Flotante -->
  <fab icon="fa-plus" />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";

export default {
  name: "NoEntrySelected",

  components: {
    Fab: defineAsyncComponent(() =>
      import("@/modules/daybook/components/Fab.vue")
    ),
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>