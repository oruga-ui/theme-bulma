<template>
  <div class="columns is-mobile is-centered is-vcentered">
    <div class="column is-narrow">
      <img class="image__oruga" src="https://raw.githubusercontent.com/oruga-ui/theme-bulma/master/public/logo.svg">
    </div>
    <h1>Bulma demo page</h1>
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
</style>