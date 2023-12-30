<script setup lang="ts">
import { ref } from "vue";

const tabs = [
    {
        label: "Pictures",
        icon: "image",
        content:
            "What light is light, if Silvia be not seen? <br />What joy is joy.",
    },
    {
        label: "Music",
        icon: "music",
        content: "Lorem <br />ipsum <br />dolor <br />sit <br />amet.",
    },
    {
        label: "Articles",
        icon: "pen",
        content:
            "What light is light, if Silvia be not seen? <br />What joy is joy, if Silvia be not by— <br />Unless it be to think that she is by <br />And feed upon the shadow of perfection? <br />Except I be by Silvia in the night, <br />There is no music in the nightingale.",
    },
    {
        label: "Books",
        icon: "book",
        content:
            "What light is light, if Silvia be not seen? <br />What joy is joy.",
    },
    {
        label: "Videos",
        icon: "video",
        content:
            "Nunc nec velit nec libero vestibulum eleifend. Curabitur pulvinar congueluctus. Nullam hendrerit iaculis augue vitae ornare. Maecenas vehiculapulvinar tellus, id sodales felis lobortis eget.",
        disabled: true,
    },
];

const atRight = ref(false);
const expanded = ref(false);
const size = ref();
const type = ref("default");
</script>

<template>
    <section>
        <h2>Tabs Demo</h2>
        <hr />
    </section>

    <section>
        <h3>Base</h3>

        <o-tabs>
            <o-tab-item
                v-for="(tab, i) in tabs"
                :key="i"
                :value="i"
                :label="tab.label"
                :icon="tab.icon"
                :disabled="tab.disabled"
                v-html="tab.content" />
        </o-tabs>
    </section>

    <section>
        <h3>Styles</h3>

        Toggle / Underline
        <o-tabs type="toggle">
            <o-tab-item
                v-for="(tab, i) in tabs"
                :key="i"
                :value="i"
                :label="tab.label"
                :icon="tab.icon"
                :disabled="tab.disabled" />
        </o-tabs>

        Boxed / Tabs
        <o-tabs type="boxed">
            <o-tab-item
                v-for="(tab, i) in tabs"
                :key="i"
                :value="i"
                :label="tab.label"
                :icon="tab.icon"
                :disabled="tab.disabled" />
        </o-tabs>
    </section>

    <section>
        <h3>Position</h3>

        <o-tabs position="left" type="boxed">
            <o-tab-item
                v-for="(tab, i) in tabs"
                :key="i"
                :value="i"
                :label="tab.label"
                :icon="tab.icon"
                :disabled="tab.disabled" />
        </o-tabs>
        <o-tabs position="centered" type="boxed">
            <o-tab-item
                v-for="(tab, i) in tabs"
                :key="i"
                :value="i"
                :label="tab.label"
                :icon="tab.icon"
                :disabled="tab.disabled" />
        </o-tabs>
        <o-tabs position="right" type="boxed">
            <o-tab-item
                v-for="(tab, i) in tabs"
                :key="i"
                :value="i"
                :label="tab.label"
                :icon="tab.icon"
                :disabled="tab.disabled" />
        </o-tabs>
    </section>

    <section>
        <h3>Expanded</h3>
        <o-tabs type="boxed" expanded>
            <o-tab-item
                v-for="(tab, i) in tabs"
                :key="i"
                :value="i"
                :label="tab.label"
                :icon="tab.icon"
                :disabled="tab.disabled" />
        </o-tabs>
    </section>

    <section>
        <h3>Sizes</h3>
        <o-tabs size="small" type="boxed">
            <o-tab-item
                v-for="(tab, i) in tabs"
                :key="i"
                :value="i"
                :label="tab.label"
                :icon="tab.icon"
                :disabled="tab.disabled" />
        </o-tabs>
        <o-tabs size="medium" type="boxed">
            <o-tab-item
                v-for="(tab, i) in tabs"
                :key="i"
                :value="i"
                :label="tab.label"
                :icon="tab.icon"
                :disabled="tab.disabled" />
        </o-tabs>
        <o-tabs size="large" type="boxed">
            <o-tab-item
                v-for="(tab, i) in tabs"
                :key="i"
                :value="i"
                :label="tab.label"
                :icon="tab.icon"
                :disabled="tab.disabled" />
        </o-tabs>
    </section>

    <section>
        <h3>Vertical</h3>

        <o-field grouped group-multiline>
            <o-field>
                <o-switch v-model="atRight" label="Right position" />
            </o-field>
            <o-field>
                <o-switch v-model="expanded" label="Expanded" />
            </o-field>
            <o-field label="Size">
                <o-select v-model="size">
                    <option :value="null">Default</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </o-select>
            </o-field>
            <o-field label="Type">
                <o-select v-model="type">
                    <option value="default">Default</option>
                    <option value="boxed">Boxed</option>
                    <option value="toggle">Toggle</option>
                    <option value="pills">Pills</option>
                </o-select>
            </o-field>
        </o-field>
        <o-tabs
            vertical
            :position="atRight ? 'right' : ''"
            :size="size"
            :type="type"
            :expanded="expanded">
            <o-tab-item
                v-for="(tab, i) in tabs"
                :key="i"
                :value="i"
                :label="tab.label"
                :icon="tab.icon"
                :disabled="tab.disabled"
                v-html="tab.content" />
        </o-tabs>
    </section>
</template>
