<script setup lang="ts">
import { ref } from "vue";

const activeStep = ref("0");

const showSocial = ref(false);
const isAnimated = ref(true);
const isVertical = ref(false);
const isRounded = ref(true);
const isStepsClickable = ref(false);

const hasNavigation = ref(true);
const customNavigation = ref(false);
const isProfileSuccess = ref(false);

const prevIcon = ref("chevron-left");
const nextIcon = ref("chevron-right");
const labelPosition = ref("bottom");
const stepsPosition = ref("left");
const position = ref(null);
const size = ref(null);
</script>

<template>
  <section>
    <h2>Steps Demo</h2>
    <hr />
  </section>

  <section>
    <h3>Base</h3>

    <o-field grouped group-multiline>
      <o-field>
        <o-switch v-model="showSocial" label="Show Social step" />
      </o-field>
      <o-field>
        <o-switch v-model="isAnimated" label="Animated" />
      </o-field>
      <o-field>
        <o-switch v-model="isRounded" label="Rounded" />
      </o-field>
      <o-field>
        <o-switch v-model="isVertical" label="Vertical" />
      </o-field>
      <o-field>
        <o-switch v-model="isStepsClickable" label="Clickable Marker" />
      </o-field>
    </o-field>
    <o-field grouped group-multiline>
      <o-field>
        <o-switch v-model="hasNavigation" label="Navigation Buttons" />
      </o-field>
      <o-field>
        <o-switch v-model="customNavigation" label="Custom Navigation" />
      </o-field>
      <o-field>
        <o-switch v-model="isProfileSuccess">
          Set <code>success</code> for profile
        </o-switch>
      </o-field>
    </o-field>
    <o-field v-if="hasNavigation" grouped group-multiline>
      <o-field label="Prev icon">
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
      <o-field label="Label position">
        <o-select v-model="labelPosition">
          <option value="bottom">Bottom</option>
          <option value="right">Right</option>
          <option value="left">Left</option>
        </o-select>
      </o-field>
      <o-field label="steps position">
        <o-select v-model="stepsPosition">
          <option value="right">Right</option>
          <option value="left">Left</option>
        </o-select>
      </o-field>
    </o-field>

    <o-steps
      v-model="activeStep"
      :vertical="isVertical"
      :position="stepsPosition"
      :animated="isAnimated"
      :rounded="isRounded"
      :has-navigation="hasNavigation"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      :label-position="labelPosition">
      <o-step-item step="1" label="Account" :clickable="isStepsClickable">
        <h1 class="title text-center">Account</h1>
        Lorem ipsum dolor sit amet.
      </o-step-item>

      <o-step-item
        step="2"
        label="Profile"
        :clickable="isStepsClickable"
        :variant="isProfileSuccess ? 'success' : ''">
        <h1 class="title text-center">Profile</h1>
        Lorem ipsum dolor sit amet.
      </o-step-item>

      <o-step-item
        step="3"
        :visible="showSocial"
        label="Social"
        :clickable="isStepsClickable">
        <h1 class="title text-center">Social</h1>
        Lorem ipsum dolor sit amet.
      </o-step-item>

      <o-step-item
        :step="showSocial ? '4' : '3'"
        label="Finish"
        :clickable="isStepsClickable"
        disabled>
        <h1 class="title text-center">Finish</h1>
        Lorem ipsum dolor sit amet.
      </o-step-item>

      <template v-if="customNavigation" #navigation="{ previous, next }">
        <o-button
          outlined
          variant="danger"
          icon-pack="fas"
          icon-left="backward"
          :disabled="previous.disabled"
          label="Previous"
          @click.prevent="previous.action" />

        <o-button
          outlined
          variant="success"
          icon-pack="fas"
          icon-right="forward"
          :disabled="next.disabled"
          label="Next"
          @click.prevent="next.action" />
      </template>
    </o-steps>
  </section>

  <section>
    <h3>Variants</h3>

    Warning
    <o-steps variant="warning">
      <o-step-item label="Account" icon="user-lock">empty</o-step-item>
      <o-step-item label="Profile" icon="user">empty</o-step-item>
      <o-step-item label="Social" icon="user-plus">empty</o-step-item>
    </o-steps>

    Info
    <o-steps variant="info">
      <o-step-item label="Account" icon="user-lock">empty</o-step-item>
      <o-step-item label="Profile" icon="user">empty</o-step-item>
      <o-step-item label="Social" icon="user-plus">empty</o-step-item>
    </o-steps>

    Success
    <o-steps variant="success">
      <o-step-item label="Account" icon="user-lock">empty</o-step-item>
      <o-step-item label="Profile" icon="user">empty</o-step-item>
      <o-step-item label="Social" icon="user-plus">empty</o-step-item>
    </o-steps>
  </section>

  <section>
    <h3>Vertical</h3>

    <o-field grouped group-multiline>
      <o-field>
        <o-switch v-model="position" true-value="right">
          Right position</o-switch
        >
      </o-field>
      <o-field label="Size">
        <o-select v-model="size" placeholder="Size">
          <option :value="null">Default</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </o-select>
      </o-field>
      <o-field label="Label position">
        <o-select v-model="labelPosition">
          <option value="bottom">Bottom</option>
          <option value="right">Right</option>
          <option value="left">Left</option>
        </o-select>
      </o-field>
    </o-field>

    <o-steps
      :position="position"
      :label-position="labelPosition"
      :size="size"
      vertical>
      <o-step-item label="Account" icon="user-lock">
        Account: Lorem ipsum dolor sit amet. <br />
        Account: Lorem ipsum dolor sit amet. <br />
        Account: Lorem ipsum dolor sit amet.
      </o-step-item>

      <o-step-item label="Profile" icon="user">
        Profile: Lorem ipsum dolor sit amet. <br />
        Profile: Lorem ipsum dolor sit amet.? <br />
        Profile: Lorem ipsum dolor sit amet. <br />
        Profile: Lorem ipsum dolor sit amet.
      </o-step-item>

      <o-step-item label="Social" icon="user-plus" disabled>
        Social: Lorem ipsum dolor sit amet. <br />
        Social: Lorem ipsum dolor sit amet. <br />
        Social: Lorem ipsum dolor sit amet. <br />
        Social: Lorem ipsum dolor sit amet. <br />
        Social: Lorem ipsum dolor sit amet.
      </o-step-item>
    </o-steps>
  </section>
</template>
