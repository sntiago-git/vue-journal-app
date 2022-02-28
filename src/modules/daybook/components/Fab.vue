<template>
  <button class="btn btn-primary">
    <i :class="iconClass"></i>
  </button>
</template>

<script>
export default {
  name: "FabComponent",

  data() {
    return {};
  },
  props: {
    icon: {
      type: String,
      required: true,
      default: "fa-plus",
    },
  },

  created() {
    // switch (this.action) {
    //   case "create":
    //     this.iconClass += "fa-plus";
    //     break;
    //   case "save":
    //     this.iconClass += " fa-floppy-disk";
    //     break;
    // }
  },

  computed: {
    iconClass() {
      return "fa fa-2x " + this.icon;
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border-radius: 100%;
  bottom: 20px;
  height: 60px;
  position: fixed;
  right: 20px;
  width: 60px;
}
</style>