<script setup lang="ts">
import { ref } from "vue";

const checkbox = ref(false);
const checkboxCustom = ref("Yes");
const checkboxGroup = ref(["Flint"]);
</script>

<template>
    <section>
        <h2>Checkbox Demo</h2>
        <hr />
    </section>

    <section>
        <h3>Base</h3>

        <o-field>
            <o-checkbox v-model="checkbox">
                {{ checkbox }}
            </o-checkbox>
        </o-field>
        <o-field>
            <o-checkbox
                v-model="checkboxCustom"
                true-value="Yes"
                false-value="No">
                {{ checkboxCustom }}
            </o-checkbox>
        </o-field>
        <o-field>
            <o-checkbox :indeterminate="true" label="Indeterminate" />
        </o-field>
        <o-field>
            <o-checkbox disabled label="Disabled" />
        </o-field>
    </section>

    <section>
        <h3>Variant</h3>

        <o-field>
            <o-checkbox :value="true" label="Default" />
        </o-field>
        <o-field>
            <o-checkbox :value="true" variant="primary" label="Primary" />
        </o-field>
        <o-field>
            <o-checkbox :value="true" variant="secondary" label="Secondary" />
        </o-field>
        <o-field>
            <o-checkbox :value="true" variant="info" label="Info" />
        </o-field>
        <o-field>
            <o-checkbox :value="true" variant="success" label="Success" />
        </o-field>
        <o-field>
            <o-checkbox :value="true" variant="warning" label="Warning" />
        </o-field>
        <o-field>
            <o-checkbox :value="true" variant="danger" label="Danger" />
        </o-field>
    </section>

    <section>
        <h3>Indeterminate</h3>

        <o-field>
            <o-checkbox indeterminate label="Default Indeterminate" />
        </o-field>
        <o-field>
            <o-checkbox
                variant="primary"
                indeterminate
                label="Primary Indeterminate" />
        </o-field>
        <o-field>
            <o-checkbox
                variant="secondary"
                indeterminate
                label="Secondary Indeterminate" />
        </o-field>
        <o-field>
            <o-checkbox
                variant="info"
                indeterminate
                label="Info Indeterminate" />
        </o-field>
        <o-field>
            <o-checkbox
                variant="success"
                indeterminate
                label="Success Indeterminate" />
        </o-field>
        <o-field>
            <o-checkbox
                variant="warning"
                indeterminate
                label="Warning Indeterminate" />
        </o-field>
        <o-field>
            <o-checkbox
                variant="danger"
                indeterminate
                label="Danger Indeterminate" />
        </o-field>
    </section>

    <section>
        <h3>Size</h3>

        <o-field>
            <o-checkbox size="small" label="Small" />
        </o-field>
        <o-field>
            <o-checkbox label="Default" />
        </o-field>
        <o-field>
            <o-checkbox size="medium" label="Medium" />
        </o-field>
        <o-field>
            <o-checkbox size="large" label="Large" />
        </o-field>
    </section>

    <section>
        <h3>Array</h3>

        <o-field>
            <o-checkbox
                v-model="checkboxGroup"
                native-value="Silver"
                label="Silver" />
            <o-checkbox
                v-model="checkboxGroup"
                native-value="Flint"
                label="Flint" />
            <o-checkbox
                v-model="checkboxGroup"
                native-value="Vane"
                label="Vane" />
            <o-checkbox
                v-model="checkboxGroup"
                native-value="Billy"
                disabled
                label="Billy" />
        </o-field>
        <p><b>Selection:</b> {{ checkboxGroup }}</p>
    </section>
</template>
