<script setup lang="ts">
defineProps({
    component: { type: String, required: true },
});
</script>

<template>
    <section>
        <h1>{{ component }} Example</h1>
        <hr />
    </section>

    <section>
        <component :is="`${component}Examples`" />
    </section>
</template>
