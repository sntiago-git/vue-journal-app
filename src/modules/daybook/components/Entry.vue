<template>
  <div class="entry-container mb-3 pointer p-2" @click="goToEntry">
    <!-- Titulo -->

    <div class="entry-tittle d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, Jueves</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sint unde
      corporis ea reprehenderit optio, labore ducimus et alias necessitatibus
      minima exercitationem atque, fugiat totam commodi? Deleniti labore aut
      odio.
    </div>
  </div>
</template>

<script>
export default {
  name: "EntryComponent",
  methods: {
    goToEntry() {
      this.$router.push({ name: "daybook-entry", params: { id: 2 } });
    },
  },
};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>