<script setup lang="ts">
import { ref } from "vue";

const isImageModalActive = ref(false);
const isCardModalActive = ref(false);
const isFullScreenModalActive = ref(false);

const tags = ref([]);
const value = ref(20);
</script>

<template>
    <section>
        <h2>Modal Demo</h2>
        <hr />
    </section>

    <section>
        <h3>Base</h3>

        <div class="buttons">
            <o-button
                size="medium"
                variant="primary"
                label="Open Image Modal"
                @click="isImageModalActive = true" />

            <o-button
                size="medium"
                variant="primary"
                label="Open Card Modal"
                @click="isCardModalActive = true" />

            <o-button
                size="medium"
                variant="primary"
                label="Open FullScreen Modal"
                @click="isFullScreenModalActive = true" />
        </div>

        <!-- image modal -->
        <o-modal v-model:active="isImageModalActive">
            <p style="text-align: center">
                <img
                    style="background-color: white"
                    src="https://avatars2.githubusercontent.com/u/66300512?s=200&v=4" />
            </p>
        </o-modal>

        <!-- card modal -->
        <o-modal v-model:active="isCardModalActive" :width="720" scroll="clip">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        Log in to continue using the service
                    </h5>
                    <o-icon
                        clickable
                        native-type="button"
                        icon="times"
                        @click="isCardModalActive = false" />
                </div>
                <div class="modal-body">
                    <o-field label="Email">
                        <o-input
                            icon="at"
                            :has-counter="true"
                            maxlength="10"
                            placeholder="Enter Your Email" />
                    </o-field>
                    <o-field label="Password">
                        <o-input
                            icon="lock"
                            :has-counter="true"
                            maxlength="10"
                            placeholder="Enter Your Password" />
                    </o-field>
                    <o-field label="Enter some items">
                        <o-inputitems
                            v-model="tags"
                            variant="primary"
                            field="user.first_name"
                            icon="tag"
                            placeholder="Add an item"
                            keep-first />
                    </o-field>
                    <o-field label="Dark & Medium">
                        <o-slider
                            v-model="value"
                            :rounded="true"
                            size="medium"
                            variant="dark"
                            tooltip-variant="dark" />
                    </o-field>
                    <o-field>
                        <o-checkbox variant="info"> Remember me </o-checkbox>
                    </o-field>
                </div>
                <div class="modal-footer">
                    <o-button
                        outlined
                        variant="danger"
                        label="Close"
                        @click="isCardModalActive = false" />
                    <o-button outlined variant="primary" label="Log in" />
                </div>
            </div>
        </o-modal>

        <!-- fullscreen modal -->
        <o-modal
            v-model:active="isFullScreenModalActive"
            :width="720"
            scroll="clip"
            :can-cancel="['escape', 'button']"
            full-screen>
            <div class="modal-content h-100">
                <div class="modal-header">
                    <h5 class="modal-title">
                        Log in to continue using the service
                    </h5>
                    <o-icon
                        clickable
                        native-type="button"
                        icon="times"
                        @click="isFullScreenModalActive = false" />
                </div>
                <div class="modal-body">
                    <o-field label="Email">
                        <o-input
                            icon="at"
                            :has-counter="true"
                            maxlength="10"
                            placeholder="Enter Your Email" />
                    </o-field>
                    <o-field label="Password">
                        <o-input
                            icon="lock"
                            :has-counter="true"
                            maxlength="10"
                            placeholder="Enter Your Password" />
                    </o-field>
                    <o-field label="Enter some items">
                        <o-inputitems
                            v-model="tags"
                            variant="primary"
                            field="user.first_name"
                            icon="tag"
                            placeholder="Add an item"
                            keep-first />
                    </o-field>
                    <o-field label="Dark & Medium">
                        <o-slider
                            v-model="value"
                            :rounded="true"
                            size="medium"
                            variant="dark"
                            tooltip-variant="dark" />
                    </o-field>
                    <o-field>
                        <o-checkbox variant="info"> Remember me </o-checkbox>
                    </o-field>
                </div>
                <div class="modal-footer">
                    <o-button
                        outlined
                        variant="danger"
                        label="Close"
                        @click="isFullScreenModalActive = false" />
                    <o-button outlined variant="primary" label="Log in" />
                </div>
            </div>
        </o-modal>
    </section>
</template>

<style lang="scss" scoped>
.modal-content {
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 160px);
    overflow: auto;
    width: 100%;

    @media screen and (min-width: 769px) {
        margin: 0 auto;
        max-height: calc(100vh - 40px);
        width: 640px;
    }

    .modal-footer,
    .modal-header {
        align-items: center;
        background-color: #f5f5f5;
        display: flex;
        flex-shrink: 0;
        justify-content: flex-start;
        padding: 20px;
        position: relative;
    }
    .modal-header {
        border-bottom: 1px solid #dbdbdb;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;

        .modal-title {
            color: #363636;
            flex-grow: 1;
            flex-shrink: 0;
            font-size: 1.5rem;
            line-height: 1;
            margin: 0;
        }
    }
    .modal-body {
        -webkit-overflow-scrolling: touch;
        background-color: #fff;
        flex-grow: 1;
        flex-shrink: 1;
        overflow: auto;
        padding: 20px;
    }

    .modal-footer {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        border-top: 1px solid #dbdbdb;

        button:not(:last-child) {
            margin-right: 0.5em;
        }
    }
}
</style>
