<template>
  <section>
    <h2>Base</h2>
    <div class="buttons">
      <o-button
        size="medium"
        variant="primary"
        @click="isImageModalActive = true"
      >
        Open modal
      </o-button>
      <o-button
        size="medium"
        variant="primary"
        @click="isFullScreenImageModalActive = true"
      >
        Open full screen modal
      </o-button>
      <o-button
        size="medium"
        variant="primary"
        @click="isCardModalActive = true"
      >
        Open modal (clip scroll)
      </o-button>
    </div>

    <h2>Programmatically</h2>
    <div class="buttons">
      <o-button size="medium" variant="primary" @click="cardModal(false)">
        Open modal (Component)
      </o-button>
      <o-button size="medium" variant="primary" @click="cardModal(true)">
        Open full screen modal (Component)
      </o-button>
    </div>

    <o-modal v-model:active="isImageModalActive" content-class="modal-content">
      <p style="text-align: center">
        <img
          style="background-color: white"
          src="https://avatars2.githubusercontent.com/u/66300512?s=200&v=4"
        />
      </p>
    </o-modal>

    <o-modal
      v-model:active="isFullScreenImageModalActive"
      content-class="modal-content is-flex is-flex-direction-column is-align-items-center is-justify-content-center"
      full-screen
    >
      <img
        style="background-color: white"
        src="https://avatars2.githubusercontent.com/u/66300512?s=200&v=4"
      />
      <p>Press [ESC]</p>
    </o-modal>

    <o-modal v-model:active="isCardModalActive" :width="640" scroll="clip">
      <modal-demo-card @close="isCardModalActive = false" />
    </o-modal>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalDemoCard from "./ModalDemoCard.vue";
import { ModalProgrammatic as Modal } from "@oruga-ui/oruga-next";

export default defineComponent({
  components: { ModalDemoCard },

  data() {
    return {
      isImageModalActive: false,
      isFullScreenImageModalActive: false,
      isCardModalActive: false,
    };
  },

  methods: {
    cardModal(fullScreen: Boolean) {
      Modal.open({
        fullScreen,
        component: ModalDemoCard,
        canCancel: !fullScreen,
        trapFocus: true,
      });
    },
  },
});
</script>