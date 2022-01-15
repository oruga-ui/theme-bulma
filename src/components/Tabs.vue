<template>
    <o-tabs v-model="activeTab" multiline>
        <o-tab-item :value="0" label="Pictures">
            Lorem ipsum dolor sit amet.
        </o-tab-item>

        <o-tab-item :value="1" label="Music">
            Lorem <br />
            ipsum <br />
            dolor <br />
            sit <br />
            amet.
        </o-tab-item>

        <o-tab-item :value="2" label="Books">
            What light is light, if Silvia be not seen? <br />
            What joy is joy, if Silvia be not by— <br />
            Unless it be to think that she is by <br />
            And feed upon the shadow of perfection? <br />
            Except I be by Silvia in the night, <br />
            There is no music in the nightingale.
        </o-tab-item>

        <o-tab-item :value="3" label="Videos" icon="video" disabled>
            Nunc nec velit nec libero vestibulum eleifend. Curabitur pulvinar
            congue luctus. Nullam hendrerit iaculis augue vitae ornare. Maecenas
            vehicula pulvinar tellus, id sodales felis lobortis eget.
        </o-tab-item>
    </o-tabs>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    data() {
        return {
            activeTab: 0
        }
    }
})
</script>