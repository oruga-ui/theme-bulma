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
  <hr />
  <section>
    <o-tooltip label="Tooltip multiline, probably because it's too long for a casual tooltip" multiline>
      <o-button>
        Multiline (default)
      </o-button>
    </o-tooltip>

    <o-tooltip label="It's not brief, but it's also not long" multiline>
      <o-button>
        Multiline (small)
      </o-button>
    </o-tooltip>

    <o-tooltip
        label="Tooltip large multiline, because it's too long to be on a medium size. Did I tell you it's really long? Yes, it is — I assure you!"
        position="bottom"
        multiline
    >
      <o-button>
        Multiline (large)
      </o-button>
    </o-tooltip>
  </section>
  <hr />
  <section>
    <o-tooltip position="bottom" multiline>
      <o-button>Html Content</o-button>
      <template v-slot:content> <b>Lorem ipsum dolor sit amet</b>, consectetur warning elit. <i>Fusce id fermentum quam</i>. </template>
    </o-tooltip>

    <o-tooltip variant="primary" :triggers="['click']" :auto-close="['outside', 'escape']">
      <template v-slot:content>
        <o-icon icon="heart" variant="danger"></o-icon>
        <o-icon icon="thumbs-up" variant="info"></o-icon>
        <o-icon icon="thumbs-down" variant="warning"></o-icon>
        <o-icon icon="smile-beam"></o-icon>
      </template>
      <o-button>Action</o-button>
    </o-tooltip>
  </section>
  <hr />
  <section>
    <o-field>
      <o-switch @click="active = !active">
        Toggle
      </o-switch>
    </o-field>
    <o-tooltip label="I'm never closing" :active="active" always position="bottom">
      <o-button>
        Always
      </o-button>
    </o-tooltip>

    <o-tooltip label="Tooltip right" position="right" :active="active">
      <o-button>
        Right
      </o-button>
    </o-tooltip>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      activeTab: 0,
      active: true
    };
  },
});
</script>

<style scoped>
span.b-tooltip {
  margin-right: 10px;
}
</style>
