<template>
  <nav class="navbar bg-primary">
    <a class="navbar-brand text-white pointer" @click="$router.push({name:'daybook'})">
      <img
        alt="Vue logo"
        src="@/assets/logo.png"
        class="d-inline-block aling-text-top mx-2"
        height="24"
      />
      Daybook
    </a>

    <div class="d-flex">
      <button class="btn btn-outline-info mx-2">
        Logout <i class="ms-1 fa fa-thin fa-arrow-right-from-bracket"></i>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "daybookNavBar",
};
</script>

<style>
</style>