<script setup lang="ts">
import { ref } from "vue";

const isSwitched = ref(false);
const isSwitchedCustom = ref("Yes");
const isRounded = ref(false);
const position = ref("right");
const size = ref("");
const variant = ref(null);
const passive = ref(null);
</script>

<template>
  <section>
    <h2>Switch Demo</h2>
    <hr />
  </section>

  <section>
    <h3>Base</h3>

    <o-field>
      <o-switch label="Default" />
    </o-field>
    <o-field>
      <o-switch v-model="isSwitched">
        {{ isSwitched }}
      </o-switch>
    </o-field>
    <o-field>
      <o-switch v-model="isSwitchedCustom" true-value="Yes" false-value="No">
        {{ isSwitchedCustom }}
      </o-switch>
    </o-field>
    <o-field>
      <o-switch disabled label="Disabled" />
    </o-field>
  </section>

  <section>
    <h3>Variant</h3>

    <o-field>
      <o-switch :model-value="true" label="Default" />
    </o-field>
    <o-field>
      <o-switch :model-value="true" variant="primary" label="Primary" />
    </o-field>
    <o-field>
      <o-switch :model-value="true" variant="secondary" label="Secondary" />
    </o-field>
    <o-field>
      <o-switch :model-value="true" variant="info" label="Info" />
    </o-field>
    <o-field>
      <o-switch :model-value="true" variant="success" label="Success" />
    </o-field>
    <o-field>
      <o-switch :model-value="true" variant="danger" label="Danger" />
    </o-field>
    <o-field>
      <o-switch :model-value="true" variant="warning" label="Warning" />
    </o-field>
  </section>

  <section>
    <h3>Size</h3>

    <o-field>
      <o-switch size="small" label="Small" />
    </o-field>
    <o-field>
      <o-switch label="Default" />
    </o-field>
    <o-field>
      <o-switch size="medium" label="Medium" />
    </o-field>
    <o-field>
      <o-switch size="large" label="Large" />
    </o-field>
  </section>

  <section>
    <h3>Style variants</h3>

    <o-field grouped>
      <o-switch v-model="isRounded" label="Rounded" />
      <o-switch
        v-model="position"
        true-value="left"
        false-value="right"
        label="
        Label on left
      " />
    </o-field>
    <o-field grouped>
      <o-field label="Variant">
        <o-select v-model="variant" expanded placeholder="Variant">
          <option value="null">Default</option>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="success">Success</option>
          <option value="info">Info</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
        </o-select>
      </o-field>
      <o-field label="Passive Variant">
        <o-select v-model="passive" expanded placeholder="Passive Variant">
          <option value="null">Default</option>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="success">Success</option>
          <option value="info">Info</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
        </o-select>
      </o-field>
      <o-field label="Size">
        <o-select v-model="size" expanded>
          <option value="">Default</option>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </o-select>
      </o-field>
    </o-field>

    <o-switch
      :rounded="isRounded"
      :position="position"
      :size="size"
      :variant="variant"
      :passive-variant="passive"
      label="Sample" />
  </section>
</template>
