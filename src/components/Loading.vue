<script setup lang="ts">
import { ref } from "vue";

const isLoading = ref(false);
const isFullPage = ref(true);
const isCustomLoading = ref(false);
const isCustomFullPage = ref(true);
</script>

<template>
    <section>
        <h2>Loading Demo</h2>
        <hr />
    </section>

    <section>
        <h3>Base</h3>

        <o-field>
            <o-button
                size="medium"
                variant="primary"
                label="Launch loading"
                @click="() => (isLoading = true)" />
        </o-field>

        <o-field>
            <o-switch
                v-model="isFullPage"
                label="Display loader over full page" />
        </o-field>

        <p style="position: relative">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit
            sapien laoreet elit
            <o-loading
                v-model:active="isLoading"
                :full-page="isFullPage"
                :cancelable="true" />
        </p>
    </section>

    <section>
        <h3>Base Custom Slot</h3>

        <o-field>
            <o-button
                size="medium"
                variant="primary"
                label="Launch loading"
                @click="() => (isCustomLoading = true)" />
        </o-field>
        <o-field>
            <o-switch
                v-model="isCustomFullPage"
                label="Display loader over full page" />
        </o-field>

        <p style="position: relative">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit
            sapien laoreet elit
            <o-loading
                v-model:active="isCustomLoading"
                :full-page="isCustomFullPage"
                :cancelable="true">
                <o-icon pack="fas" icon="sync-alt" size="large" spin />
            </o-loading>
        </p>
    </section>
</template>
