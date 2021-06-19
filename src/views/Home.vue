<template>

  <div class="columns is-mobile is-centered is-vcentered">
    <div class="column is-narrow">
      <img class="image__oruga" src="https://github.com/oruga-ui/oruga/raw/master/packages/docs/.vuepress/public/logo.png">
    </div>
    <div class="column is-narrow">
      <p class="title is-1">=></p>
    </div>
    <div class="column is-narrow">
      <img class="image__bulma" src="https://bulma.io/images/bulma-logo.png">
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
})
</script>

<style scoped>
.image__oruga {
 height: 128px;
}
.image__bulma {
 height: 64px;
}
</style>