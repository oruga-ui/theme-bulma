<template>
  <section>
    <o-field>
      <o-button size="medium" variant="primary" @click="openLoading">
        Launch loading
      </o-button>
    </o-field>
    <o-field>
      <o-switch v-model="isFullPage">Display loader over full page</o-switch>
    </o-field>
    <p style="position: relative">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
      <o-loading
        :full-page="isFullPage"
        v-model:active="isLoading"
        :can-cancel="true"
      ></o-loading>
    </p>
    <h2>Custom Slot</h2>
    <o-field>
      <o-button size="medium" variant="primary" @click="openCustomLoading">
        Launch loading
      </o-button>
    </o-field>
    <o-field>
      <o-switch v-model="isCustomFullPage"
        >Display loader over full page</o-switch
      >
    </o-field>
    <p style="position: relative">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
      <o-loading
        :full-page="isCustomFullPage"
        v-model:active="isCustomLoading"
        :can-cancel="true"
      >
        <o-icon pack="fas" icon="sync-alt" size="large" spin> </o-icon>
      </o-loading>
    </p>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      isFullPage: true,
      isCustomLoading: false,
      isCustomFullPage: true,
    };
  },
  methods: {
    openLoading() {
      this.isLoading = true;
    },
    openCustomLoading() {
      this.isCustomLoading = true;
    },
  },
};
</script>
