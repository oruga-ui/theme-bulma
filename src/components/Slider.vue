<script setup lang="ts">
import { computed, reactive, ref } from "vue";

const value = ref(5);
const sliderValue = ref(4);
const numbers = ref([2, 5]);
const numbers2 = ref([2, 6]);

const settings = reactive({
    rounded: false,
    tooltip: true,
    variant: "warning",
    size: "medium",
});

const sliderType = computed(() => {
    if (sliderValue.value > 25 && sliderValue.value < 75) return "warning";
    else if (sliderValue.value >= 75) return "success";
    return "danger";
});
</script>

<template>
    <section>
        <h2>Slider Demo</h2>
        <hr />
    </section>

    <section>
        <h3>Base</h3>

        <o-field label="Simple">
            <o-slider :model-value="8" />
        </o-field>

        <o-field label="Disabled">
            <o-slider :model-value="30" disabled />
        </o-field>

        <o-field label="Rounded thumb & No Tooltip">
            <o-slider :model-value="8" rounded :tooltip="false" />
        </o-field>

        <o-field label="Custom tooltip label">
            <o-slider
                :rounded="true"
                :custom-formatter="(val: any) => val + '%'" />
        </o-field>

        <o-field label="Tooltip type">
            <o-slider v-model="sliderValue" :tooltip-variant="sliderType" />
        </o-field>
    </section>

    <section>
        <h3>Sizes</h3>

        <o-field label="Small">
            <o-slider v-model="value" size="small" />
        </o-field>

        <o-field label="Default">
            <o-slider v-model="value" />
        </o-field>

        <o-field label="Medium">
            <o-slider v-model="value" size="medium" />
        </o-field>

        <o-field label="Large">
            <o-slider v-model="value" size="large" />
        </o-field>
    </section>

    <section>
        <h3>Variant</h3>

        <o-field label="Default">
            <o-slider v-model="value" :rounded="true" :tooltip="true" />
        </o-field>

        <o-field label="Primary">
            <o-slider
                v-model="value"
                :rounded="true"
                :tooltip="true"
                variant="primary"
                tooltip-variant="primary" />
        </o-field>
        <o-field label="Secondary">
            <o-slider
                v-model="value"
                :rounded="true"
                :tooltip="true"
                variant="secondary"
                tooltip-variant="secondary" />
        </o-field>
        <o-field label="Success">
            <o-slider
                v-model="value"
                :rounded="true"
                :tooltip="true"
                variant="success"
                tooltip-variant="success" />
        </o-field>
        <o-field label="Info">
            <o-slider
                v-model="value"
                :rounded="true"
                :tooltip="true"
                variant="info"
                tooltip-variant="info" />
        </o-field>
        <o-field label="Warning">
            <o-slider
                v-model="value"
                :rounded="true"
                :tooltip="true"
                variant="warning"
                tooltip-variant="warning" />
        </o-field>
        <o-field label="Danger">
            <o-slider
                v-model="value"
                :rounded="true"
                :tooltip="true"
                variant="danger"
                tooltip-variant="danger" />
        </o-field>
    </section>

    <section>
        <h3>Customize</h3>
        <o-field>
            <o-field>
                <o-switch v-model="settings.rounded" label="Rounded" />
            </o-field>
            <o-field>
                <o-switch v-model="settings.tooltip" label="With Tooltip" />
            </o-field>
            <o-field label="Size">
                <o-select v-model="settings.size">
                    <option value="small">small</option>
                    <option value="default">default</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                </o-select>
            </o-field>
            <o-field label="Variant">
                <o-select v-model="settings.variant">
                    <option value="default">default</option>
                    <option value="primary">primary</option>
                    <option value="secondary">secondary</option>
                    <option value="success">success</option>
                    <option value="info">info</option>
                    <option value="warning">warning</option>
                    <option value="danger">danger</option>
                </o-select>
            </o-field>
        </o-field>

        <o-field label="Tooltip type & Default Variant">
            <o-slider
                :rounded="settings.rounded"
                :tooltip="settings.tooltip"
                :variant="settings.variant"
                :size="settings.size" />
        </o-field>
    </section>

    <section>
        <h3>Tick and label</h3>

        <o-field label="Show ticks">
            <o-slider :rounded="true" size="small" :min="1" :max="10" ticks />
        </o-field>

        <o-field label="Custom tick and label">
            <o-slider :rounded="true" size="medium" :min="0" :max="10">
                <template v-for="val in [3, 5, 8]" :key="val">
                    <o-slider-tick :value="val">{{ val }}</o-slider-tick>
                </template>
            </o-slider>
        </o-field>

        <o-field label="Fan">
            <o-slider
                :rounded="true"
                :min="0"
                :max="3"
                aria-label="Fan"
                :tooltip="false">
                <o-slider-tick :value="0">Off</o-slider-tick>
                <o-slider-tick :value="1">Low</o-slider-tick>
                <o-slider-tick :value="2">High</o-slider-tick>
                <o-slider-tick :value="3">Auto</o-slider-tick>
            </o-slider>
        </o-field>
    </section>

    <section>
        <h3>Range</h3>

        <o-field label="Range">
            <o-slider
                v-model="numbers"
                :rounded="true"
                :min="1"
                :max="15"
                :step="0.5"
                ticks>
            </o-slider>
        </o-field>
        <p>{{ numbers }}</p>

        <o-field>
            <o-slider
                v-model="numbers2"
                :rounded="true"
                variant="danger"
                :min="-2"
                :max="8"
                :step="2">
            </o-slider>
        </o-field>
        <p>{{ numbers2 }}</p>
    </section>
</template>
