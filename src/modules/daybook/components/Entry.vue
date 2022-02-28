<template>
  <div class="entry-container mb-3 pointer p-2" @click="goToEntry">
    <!-- Titulo -->

    <div class="entry-tittle d-flex">
      <span class="text-success fs-5 fw-bold">{{ day }}</span>
      <span class="mx-1 fs-5">{{ month }}</span>
      <span class="mx-2 fw-light"> {{ year }}, {{ dayName }}</span>
    </div>

    <div class="entry-description">
      {{ customText }}
    </div>
  </div>
</template>

<script>
export default {
  name: "EntryComponent",
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToEntry() {
      this.$router.push({
        name: "daybook-entry",
        params: { id: this.entry.id },
      });
    },
  },
  computed: {
    transformDate() {
      return new Date(this.entry.date);
    },

    day() {
      return this.transformDate.getDate();
    },

    month() {
      return Intl.DateTimeFormat("en-US", { month: "long" }).format(
        this.transformDate
      );
    },

    year() {
      return Intl.DateTimeFormat("en-US", { year: "numeric" }).format(
        this.transformDate
      );
    },

    dayName() {
      return Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
        this.transformDate
      );
    },

    customText() {
      //Devolvemos el texto cortado a 150 caracteres maximo.
      const text = this.entry.text;
      return text.length > 150
        ? text.slice(0, 150).trim() + "..."
        : text.trim();
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