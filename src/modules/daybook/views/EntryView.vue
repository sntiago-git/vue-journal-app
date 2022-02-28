<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light"> 2021, jueves</span>
    </div>
    <div>
      <button class="btn btn-sm btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>

      <button class="btn btn-sm btn-primary">
        Subir Foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Que sucedió hoy?"></textarea>
  </div>

  <img
    src="https://images.squarespace-cdn.com/content/v1/56a5f5ef5827c35bf58e8e02/1517306531940-MSJ88JW0TQR1WNLNCZK5/Algo_Logo.jpeg"
    alt="entry-picture"
    class="img-thumbnail"
  />
  <!-- Boton Flotante -->
  <fab icon="fa-floppy-disk" />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
  components: {
    Fab: defineAsyncComponent(() =>
      import("@/modules/daybook/components/Fab.vue")
    ),
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000, $alpha: 0.2);
}
</style>