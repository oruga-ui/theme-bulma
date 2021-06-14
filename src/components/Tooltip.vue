<template>
  <section>
    <o-tooltip label="Tooltip right" position="right">
      <o-button> Right </o-button>
    </o-tooltip>

    <o-tooltip label="Tooltip top">
      <o-button> Top (default) </o-button>
    </o-tooltip>

    <o-tooltip label="Tooltip bottom" position="bottom">
      <o-button> Bottom </o-button>
    </o-tooltip>

    <o-tooltip label="Tooltip left" position="left">
      <o-button> Left </o-button>
    </o-tooltip>

    <o-tooltip label="delayed by 1000ms" :delay="1000">
      <o-button variant="warning"> Delayed </o-button>
    </o-tooltip>
  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {
      activeTab: 0,
    };
  },
});
</script>

<style scoped>
span.b-tooltip {
  margin-right: 10px;
}
</style>