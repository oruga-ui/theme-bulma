<script setup lang="ts">
import { ref } from "vue";

const isScrollable = ref(true);
const maxHeight = ref(200);
const currentMenu = ref({ icon: "users", text: "People" });
const menus = ref([
    { icon: "users", text: "People" },
    { icon: "box", text: "Orders" },
    { icon: "credit-card", text: "Payments" },
    { icon: "dolly", text: "Logistics" },
    { icon: "business-time", text: "Jobs" },
    { icon: "shopping-cart", text: "Cart" },
    { icon: "cog", text: "Configuration" },
]);
const selectedOptions = ref([]);
const teleport = ref(false);
</script>

<template>
    <section>
        <h2>Dropdown Demo</h2>
        <hr />
    </section>

    <section>
        <h3>Base</h3>

        <div class="dropdown-example">
            <o-dropdown>
                <template #trigger="{ active }">
                    <o-button
                        variant="primary"
                        :icon-right="active ? 'caret-up' : 'caret-down'"
                        label="Click me!" />
                </template>

                <o-dropdown-item label="Action" />
                <o-dropdown-item label="Another action" />
                <o-dropdown-item label="Something else" />
            </o-dropdown>
        </div>

        <div class="dropdown-example">
            <o-dropdown :triggers="['hover']">
                <template #trigger="{ active }">
                    <o-button
                        variant="info"
                        label="Hover me!"
                        :icon-right="active ? 'caret-up' : 'caret-down'" />
                </template>

                <o-dropdown-item label="Action" />
                <o-dropdown-item label="Another action" />
                <o-dropdown-item label="Something else" />
            </o-dropdown>
        </div>

        <div class="dropdown-example">
            <o-dropdown disabled>
                <template #trigger="{ active }">
                    <o-button
                        label="Disabled"
                        disabled
                        :icon-right="active ? 'caret-up' : 'caret-down'" />
                </template>

                <o-dropdown-item label="Action" />
                <o-dropdown-item label="Another action" />
                <o-dropdown-item label="Something else" />
            </o-dropdown>
        </div>

        <div class="dropdown-example">
            <o-dropdown>
                <template #trigger="{ active }">
                    <span role="button">
                        Custom
                        <o-icon
                            variant="success"
                            :icon="active ? 'caret-up' : 'caret-down'" />
                    </span>
                </template>

                <o-dropdown-item label="Action" />
                <o-dropdown-item label="Another action" />
                <o-dropdown-item label="Something else" />
            </o-dropdown>
        </div>

        <div class="dropdown-example">
            <o-dropdown :triggers="['contextmenu']">
                <template #trigger>
                    <o-button label="Right click" />
                </template>

                <o-dropdown-item label="Action" />
                <o-dropdown-item label="Another action" />
                <o-dropdown-item label="Something else" />
            </o-dropdown>
        </div>
    </section>

    <section>
        <h3>Inline</h3>

        <div class="dropdown-example">
            <o-dropdown inline>
                <template #trigger>
                    <o-button label="Inline" />
                </template>

                <o-dropdown-item value="1" label="Action " />
                <o-dropdown-item value="2" label="Another action " />
                <o-dropdown-item value="3" label="Something else " />
            </o-dropdown>
        </div>
    </section>

    <section>
        <h3>Scrollable</h3>

        <div>
            <o-field>
                <o-switch v-model="isScrollable" label="Scrollable" />
            </o-field>
        </div>

        <o-dropdown
            v-model="currentMenu"
            :scrollable="isScrollable"
            :max-height="maxHeight">
            <template #trigger>
                <o-button
                    variant="primary"
                    type="button"
                    :label="currentMenu.text"
                    :icon-left="currentMenu.icon"
                    icon-right="caret-down" />
            </template>

            <o-dropdown-item
                v-for="(menu, index) in menus"
                :key="index"
                :value="menu">
                <div class="media">
                    <o-icon class="media-left" :icon="menu.icon" />
                    <div class="media-content">{{ menu.text }}</div>
                </div>
            </o-dropdown-item>
        </o-dropdown>
    </section>

    <section>
        <h3>Multiple</h3>

        <p><b>selected</b>: {{ selectedOptions }}</p>
        <o-dropdown v-model="selectedOptions" multiple>
            <template #trigger>
                <o-button variant="primary" type="button">
                    Selected ({{ selectedOptions.length }})
                </o-button>
            </template>

            <o-dropdown-item value="option1" label="option 1" />
            <o-dropdown-item value="option2" label="Option 2" />
            <o-dropdown-item value="option3" label="Option 3" />
        </o-dropdown>
    </section>

    <section>
        <h3>Positioning & Expanded</h3>

        <o-field>
            <o-switch v-model="teleport" label="teleport" />
        </o-field>

        <div class="dropdown-example expanded">
            <o-dropdown position="auto" expanded :teleport="teleport">
                <template #trigger>
                    <o-button
                        variant="primary"
                        label="Position Auto"
                        expanded />
                </template>

                <o-dropdown-item label="Action" />
                <o-dropdown-item label="Another action" />
                <o-dropdown-item label="Something else" />
            </o-dropdown>
        </div>

        <hr />

        <div class="dropdown-example">
            <o-dropdown :teleport="teleport" position="right">
                <template #trigger>
                    <o-button label="Append to right" />
                </template>

                <o-dropdown-item label="Action" />
                <o-dropdown-item label="Another action" />
                <o-dropdown-item label="Something else" />
            </o-dropdown>
        </div>

        <div class="dropdown-example">
            <o-dropdown :teleport="teleport" position="left">
                <template #trigger>
                    <o-button label="Append to left" />
                </template>

                <o-dropdown-item label="Action" />
                <o-dropdown-item label="Another action" />
                <o-dropdown-item label="Something else" />
            </o-dropdown>
        </div>

        <div class="dropdown-example">
            <o-dropdown :teleport="teleport" position="top">
                <template #trigger>
                    <o-button label="Append to top" />
                </template>

                <o-dropdown-item label="Action" />
                <o-dropdown-item label="Another action" />
                <o-dropdown-item label="Something else" />
            </o-dropdown>
        </div>

        <div class="dropdown-example">
            <o-dropdown :teleport="teleport" position="bottom">
                <template #trigger>
                    <o-button label="Append to bottom" />
                </template>

                <o-dropdown-item label="Action" />
                <o-dropdown-item label="Another action" />
                <o-dropdown-item label="Something else" />
            </o-dropdown>
        </div>

        <hr />

        <div class="dropdown-example">
            <o-dropdown :teleport="teleport" position="top-right">
                <template #trigger>
                    <o-button label="Append to top-right" />
                </template>

                <o-dropdown-item label="Action" />
                <o-dropdown-item label="Another action" />
                <o-dropdown-item label="Something else" />
            </o-dropdown>
        </div>

        <div class="dropdown-example">
            <o-dropdown :teleport="teleport" position="top-left">
                <template #trigger>
                    <o-button label="Append to top-left" />
                </template>

                <o-dropdown-item label="Action" />
                <o-dropdown-item label="Another action" />
                <o-dropdown-item label="Something else" />
            </o-dropdown>
        </div>

        <div class="dropdown-example">
            <o-dropdown :teleport="teleport" position="bottom-right">
                <template #trigger>
                    <o-button label="Append to bottom-right" />
                </template>

                <o-dropdown-item label="Action" />
                <o-dropdown-item label="Another action" />
                <o-dropdown-item label="Something else" />
            </o-dropdown>
        </div>

        <div class="dropdown-example">
            <o-dropdown :teleport="teleport" position="bottom-left">
                <template #trigger>
                    <o-button label="Append to bottom-left" />
                </template>

                <o-dropdown-item label="Action" />
                <o-dropdown-item label="Another action" />
                <o-dropdown-item label="Something else" />
            </o-dropdown>
        </div>
    </section>
</template>

<style scoped lang="scss">
.dropdown-example {
    display: inline-flex;
    position: relative;
    vertical-align: top;

    &.expanded {
        display: block;
    }

    &:not(:last-child) {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }
}

.media {
    align-items: flex-start;
    display: flex;
    text-align: left;

    .media-content {
        flex-basis: auto;
        flex-grow: 1;
        flex-shrink: 1;
        text-align: left;
        overflow-y: hidden;
        overflow-x: auto;
    }

    .media-left {
        margin-right: 1rem;
        flex-basis: auto;
        flex-grow: 0;
        flex-shrink: 0;
    }
}
</style>
