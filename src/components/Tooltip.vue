<script setup lang="ts">
import { ref } from "vue";

const active = ref(true);
const teleport = ref(false);
</script>

<template>
  <section>
    <h2>Tooltip Demo</h2>
    <hr />
  </section>

  <section>
    <h3>Base</h3>

    <o-tooltip label="Tooltip">
      <o-button label="Hover me! " />
    </o-tooltip>

    <o-tooltip label="delayed by 1000ms" :delay="1000">
      <o-button variant="warning" label="Delayed" />
    </o-tooltip>

    <o-tooltip label="I'm on body" teleport>
      <o-button variant="info" label="Append on body" />
    </o-tooltip>
  </section>

  <section>
    <h3>Position</h3>

    <o-field>
      <o-switch v-model="teleport" label="teleport" />
    </o-field>

    <o-tooltip label="Tooltip right" :teleport="teleport" position="right">
      <o-button label="Right" />
    </o-tooltip>

    <o-tooltip label="Tooltip top" :teleport="teleport" position="top">
      <o-button label="Top" />
    </o-tooltip>

    <o-tooltip label="Tooltip bottom" :teleport="teleport" position="bottom">
      <o-button label="Bottom" />
    </o-tooltip>

    <o-tooltip label="Tooltip left" :teleport="teleport" position="left">
      <o-button label="Left" />
    </o-tooltip>

    <hr />

    <o-tooltip label="Tooltip right" :teleport="teleport" position="top-right">
      <o-button label="Top Right" />
    </o-tooltip>

    <o-tooltip label="Tooltip top" :teleport="teleport" position="top-left">
      <o-button label="Top Left" />
    </o-tooltip>

    <o-tooltip
      label="Tooltip bottom"
      :teleport="teleport"
      position="bottom-right">
      <o-button label="Bottom Right" />
    </o-tooltip>

    <o-tooltip label="Tooltip left" :teleport="teleport" position="bottom-left">
      <o-button label="Bottom Left" />
    </o-tooltip>
  </section>
  <section>
    <h3>Variants</h3>

    <o-tooltip label="Default">
      <o-button label="Default" />
    </o-tooltip>

    <o-tooltip label="Primary" variant="primary">
      <o-button label="Primary" variant="primary" />
    </o-tooltip>

    <o-tooltip label="Secondary" variant="secondary">
      <o-button label="Secondary" variant="secondary" />
    </o-tooltip>

    <o-tooltip label="Success" variant="success">
      <o-button label="Success" variant="success" />
    </o-tooltip>

    <o-tooltip label="Danger" variant="danger">
      <o-button label="Danger" variant="danger" />
    </o-tooltip>

    <o-tooltip label="Warning" variant="warning">
      <o-button label="Warning" variant="warning" />
    </o-tooltip>

    <o-tooltip label="Info" variant="info">
      <o-button label="Info" variant="info" />
    </o-tooltip>
  </section>

  <section>
    <h3>Multiline</h3>

    <o-tooltip
      variant="info"
      label="Tooltip multiline, probably because it's too long for a casual tooltip"
      multiline>
      <o-button label="Multiline (default)" />
    </o-tooltip>

    <o-tooltip
      variant="info"
      label="It's not brief, but it's also not long"
      multiline>
      <o-button label="Multiline (small)" />
    </o-tooltip>

    <o-tooltip
      variant="info"
      label="Tooltip large multiline, because it's too long to be on a medium size. Did I tell you it's really long? Yes, it is — I assure you!"
      position="bottom"
      multiline>
      <o-button label="Multiline (large)" />
    </o-tooltip>
  </section>

  <section>
    <h3>Slot</h3>

    <o-tooltip variant="light" position="bottom" multiline>
      <o-button>Html Content</o-button>
      <template #content>
        <b>Lorem ipsum dolor sit amet</b>, consectetur warning elit.
        <i>Fusce id fermentum quam</i>.
      </template>
    </o-tooltip>

    <o-tooltip
      variant="light"
      :triggers="['click']"
      :auto-close="['outside', 'escape']">
      <template #content>
        <o-icon icon="heart" variant="dark"></o-icon>
        <o-icon icon="thumbs-up" variant="dark"></o-icon>
        <o-icon icon="thumbs-down" variant="dark"></o-icon>
        <o-icon icon="smile-beam"></o-icon>
      </template>
      <o-button label="Action" />
    </o-tooltip>
  </section>

  <section>
    <h3>Toggle</h3>

    <o-field>
      <o-switch v-model="active" label="Toggle Always" />
    </o-field>

    <o-tooltip
      variant="danger"
      label="I'm never closing"
      :active="active"
      always
      position="bottom">
      <o-button label="Always" />
    </o-tooltip>

    <o-tooltip
      variant="danger"
      label="Tooltip right"
      position="right"
      :active="active">
      <o-button label="Right" />
    </o-tooltip>
  </section>
</template>

<style scoped>
.o-tip {
  margin-right: 10px;
}
</style>
