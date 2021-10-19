<template>
  <section>
    <div class="buttons">
      <o-button
        size="medium"
        variant="primary"
        @click="isImageModalActive = true"
      >
        Open modal
      </o-button>
      <o-button
        size="medium"
        variant="primary"
        @click="isCardModalActive = true"
      >
        Open modal (clip scroll)
      </o-button>
    </div>

    <o-modal v-model:active="isImageModalActive" content-class="modal-content">
      <p style="text-align: center">
        <img
          style="background-color: white;"
          src="https://avatars2.githubusercontent.com/u/66300512?s=200&v=4"
        />
      </p>
    </o-modal>

    <o-modal v-model:active="isCardModalActive" :width="640" scroll="clip">
      <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Login</p>
                        <o-icon
                            clickable
                            native-type="button"
                            icon="times"
                            @click="isCardModalActive = false"/>
                    </header>
                    <section class="modal-card-body">
                        <o-field label="Email">
                            <o-input
                                type="email"
                                :value="email"
                                placeholder="Your email"
                                required>
                            </o-input>
                        </o-field>

                        <o-field label="Password">
                            <o-input
                                type="password"
                                :value="password"
                                password-reveal
                                placeholder="Your password"
                                required>
                            </o-input>
                        </o-field>

                        <o-field>
                            <o-checkbox>Remember me</o-checkbox>
                        </o-field>
                    </section>
                    <footer class="modal-card-foot">
                        <o-button type="button" @click="isCardModalActive = false">Close</o-button>
                        <o-button variant="primary">Login</o-button>
                    </footer>
                </div>
            </form>
    </o-modal>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {
      isImageModalActive: false,
      isCardModalActive: false,
      email:'',
      password:''
    };
  },
});
</script>