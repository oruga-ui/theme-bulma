<script setup lang="ts">
import { ref } from "vue";

const total = ref(200);
const current = ref(10);
const perPage = ref(10);
const rangeBefore = ref(3);
const rangeAfter = ref(1);
const order = ref("");
const size = ref("");
const isSimple = ref(false);
const isRounded = ref(false);
const prevIcon = ref("chevron-left");
const nextIcon = ref("chevron-right");
</script>

<template>
    <section>
        <h2>Pagination Demo</h2>
        <hr />
    </section>

    <section>
        <h3>Base</h3>

        <o-field grouped group-multiline>
            <o-field label="Total">
                <o-input v-model="total" type="number" />
            </o-field>
            <o-field label="Items per page">
                <o-input v-model="perPage" type="number" />
            </o-field>
        </o-field>

        <o-field grouped group-multiline>
            <o-field label="Show buttons before current">
                <o-input v-model="rangeBefore" type="number" min="0" />
            </o-field>
            <o-field label="Show buttons after current">
                <o-input v-model="rangeAfter" type="number" min="0" />
            </o-field>
        </o-field>

        <o-field grouped group-multiline>
            <o-field label="Order">
                <o-select v-model="order">
                    <option value="">default</option>
                    <option value="left">left</option>
                    <option value="centered">centered</option>
                    <option value="right">right</option>
                </o-select>
            </o-field>
            <o-field label="Size">
                <o-select v-model="size">
                    <option value="">default</option>
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                </o-select>
            </o-field>
            <o-field label="Previous icon">
                <o-select v-model="prevIcon">
                    <option value="chevron-left">Chevron</option>
                    <option value="arrow-left">Arrow</option>
                </o-select>
            </o-field>
            <o-field label="Next icon">
                <o-select v-model="nextIcon">
                    <option value="chevron-right">Chevron</option>
                    <option value="arrow-right">Arrow</option>
                </o-select>
            </o-field>
        </o-field>
        <o-field grouped group-multiline>
            <o-switch v-model="isSimple">Simple</o-switch>
            <o-switch v-model="isRounded">Rounded</o-switch>
        </o-field>
        <br />
        <o-pagination
            v-model:current="current"
            :total="total"
            :range-before="rangeBefore"
            :range-after="rangeAfter"
            :order="order"
            :size="size"
            :simple="isSimple"
            :rounded="isRounded"
            :per-page="perPage"
            :icon-prev="prevIcon"
            :icon-next="nextIcon"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page" />
    </section>
</template>
