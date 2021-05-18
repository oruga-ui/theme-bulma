<template>
  <div class="section">
    <o-field label="Name"  variant="danger" message="Invalid field">
      <o-input icon="user" size="large"></o-input>
    </o-field>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
});
</script>
