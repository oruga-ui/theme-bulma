<script setup lang="ts">
import { ref } from "vue";

const animated = ref(true);
</script>

<template>
    <section>
        <h2>Skeleton Demo</h2>
        <hr />
    </section>

    <section>
        <h3>Base</h3>

        <o-field grouped>
            <o-switch v-model="animated" label="Animated" />
        </o-field>

        <o-field label="20%">
            <o-skeleton width="20%" :animated="animated" />
        </o-field>
        <o-field label="40%">
            <o-skeleton width="40%" :animated="animated" />
        </o-field>
        <o-field label="80%">
            <o-skeleton width="80%" :animated="animated" />
        </o-field>
        <o-field label="100%">
            <o-skeleton :animated="animated" />
        </o-field>
        <o-field label=" Count 2">
            <o-skeleton :animated="animated" :count="2" />
        </o-field>
    </section>

    <section>
        <h3>Circle</h3>

        <o-skeleton :animated="animated" circle width="64px" height="64px" />
    </section>

    <section>
        <h3>Sizes</h3>

        <o-field label="Small" grouped>
            <o-skeleton size="small" />
        </o-field>
        <o-field label="Default" grouped>
            <o-skeleton />
        </o-field>
        <o-field label="Medium" grouped>
            <o-skeleton size="medium" />
        </o-field>
        <o-field label="Large" grouped>
            <o-skeleton size="large" />
        </o-field>
    </section>

    <section>
        <h3>Position</h3>

        <o-field label="Left" grouped>
            <o-skeleton width="30%" position="left" />
        </o-field>

        <o-field label="Center" grouped>
            <o-skeleton width="30%" position="centered" />
        </o-field>

        <o-field label="Right" grouped>
            <o-skeleton width="30%" position="right" />
        </o-field>
    </section>
</template>
