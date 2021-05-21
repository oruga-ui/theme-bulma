<template>
  <div class="section">

    <p class="content"><b>Selected:</b> {{ selected }}</p>
        <o-field label="Find a JS framework">
            <o-autocomplete
                rounded
                v-model="name"
                :data="filteredDataArray"
                placeholder="e.g. jQuery"
                icon="search"
                clearable
                @select="option => selected = option">
                <template #empty>No results found</template>
            </o-autocomplete>
        </o-field>


        <o-field label="Add some tags">
            <o-inputitems
                v-model="tags"
                ellipsis
                icon="tag"
                placeholder="Add a tag"
                aria-close-label="Delete this tag">
            </o-inputitems>
        </o-field>
        <p class="content"><b>Tags:</b> {{ tags }}</p>

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
      rounded: true,
      data: [
          'Angular',
          'Angular 2',
          'Aurelia',
          'Backbone',
          'Ember',
          'jQuery',
          'Meteor',
          'Node.js',
          'Polymer',
          'React',
          'RxJS',
          'Vue.js'
      ],
      name: '',
      selected: null,
      tags: ['Pistoia']
    }
  },
  computed: {
    hello(): string {
      return this.tmp
    },
    filteredDataArray(): string[] {
        return this.data.filter((option) => {
            return option
                .toString()
                .toLowerCase()
                .indexOf(this.name.toLowerCase()) >= 0
        })
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
