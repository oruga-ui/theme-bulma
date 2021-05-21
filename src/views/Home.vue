<template>
  <div class="section">

    <o-field label="Name"  variant="danger" message="Invalid field">
      <o-input icon="user" size="large" :has-counter="true" maxlength="10"></o-input>
    </o-field>

    <o-field label="Name"  variant="danger" message="Invalid field">
      <o-select :rounded="rounded" expanded>
        <option>Select dropdown</option>
        <option>With options</option>
      </o-select>
    </o-field>

    <o-field label="Name">
     <o-select size="large">
      <option>Select dropdown</option>
      <option>With options</option>
    </o-select>
     </o-field>

     <o-select placeholder="Select a value" icon="user">
      <option>Select dropdown</option>
      <option>With options</option>
    </o-select>

    <o-field label="Name">
      <o-input icon="user"></o-input>
      <div class="control">
        <a class="button is-info">
          Search
        </a>
      </div>
    </o-field>
    
    <o-field label="Name" grouped>
      <o-input icon="user"></o-input>
      <div class="control">
        <a class="button is-info">
          Search
        </a>
      </div>
    </o-field>

    <o-field label="Name">
      <div class="control">
        <a class="button is-info">
          Search
        </a>
      </div>
      <o-input icon="user" expanded></o-input>
      <div class="control">
        <a class="button is-info">
          Search
        </a>
      </div>
    </o-field>

    <o-field horizontal label="Name">
      <o-input icon="user" expanded></o-input>
      <o-input icon="user" rounded expanded></o-input>
    </o-field>

    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  props: {
    loading: Boolean
  },
  data() {
    return {
      tmp: 'a',
      rounded: true
    }
  },
  computed: {
    hello(): string {
      return this.tmp
    }
  },
  mounted() {
    console.log(this)
    setTimeout(() => {
      this.rounded = false
    }, 3 * 1000)
    // console.log(this.$props, this.$data, this)
  }
});
</script>
