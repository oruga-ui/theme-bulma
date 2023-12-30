<script setup lang="ts">
import { ref } from "vue";

const isActive = ref(false);
const isOverlay = ref(true);
const isFullheight = ref(true);
const isFullwidth = ref(false);
const isReduced = ref(false);
const expandOnHover = ref(false);
const teleport = ref(false);
const position = ref("left");
const inline = ref(false);

const toggleSidebar = () => {
    isActive.value = !isActive.value;
};
</script>

<template>
    <section>
        <h2>Sidebar Demoo</h2>
        <hr />
    </section>

    <section>
        <h3>Base</h3>

        <o-field grouped>
            <o-switch v-model="isOverlay" label="Overlay" />
            <o-switch v-model="isFullheight" label="Fullheight" />
            <o-switch v-model="isFullwidth" label="Fullwidth" />
            <o-switch v-model="isReduced" label="Reduce" />
            <o-switch v-model="expandOnHover" label="Expand on hover" />
            <o-switch v-model="teleport" label="On body" />
            <o-switch v-model="inline" label="Inline" />
        </o-field>

        <o-field label="Position">
            <o-select v-model="position">
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
                <option value="right">Right</option>
                <option value="left">Left</option>
            </o-select>
        </o-field>
        <o-button @click="toggleSidebar()">Show</o-button>

        <o-sidebar
            v-model:active="isActive"
            variant="primary"
            :fullheight="isFullheight"
            :fullwidth="isFullwidth"
            :overlay="isOverlay"
            :position="position"
            :reduce="isReduced"
            :expand-on-hover="expandOnHover"
            :teleport="teleport"
            :inline="inline"
            mobile="fullwidth"
            @close="toggleSidebar()">
            <o-button
                class="btn-close"
                icon-left="times"
                label="Close"
                @click="toggleSidebar()" />
            <img
                width="80"
                src="https://avatars2.githubusercontent.com/u/66300512?s=200&v=4"
                alt="Lightweight UI components for Vue.js" />
            <h3>Example</h3>
        </o-sidebar>
    </section>
</template>
