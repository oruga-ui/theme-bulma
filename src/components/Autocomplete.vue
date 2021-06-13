<template>
   <p class="content"><b>Selected:</b> {{ selected }}</p>
    <o-field label="Find a JS framework">
      <o-autocomplete
        rounded
        v-model="name"
        :data="filteredDataArray"
        placeholder="e.g. jQuery"
        icon="search"
        clearable
        @select="(option) => (selected = option)"
      >
        <template #empty>No results found</template>
      </o-autocomplete>
    </o-field>
</template>

<script lang="ts">
export default {
    data() {
        return {
            data: [
                "Angular",
                "Angular 2",
                "Aurelia",
                "Backbone",
                "Ember",
                "jQuery",
                "Meteor",
                "Node.js",
                "Polymer",
                "React",
                "RxJS",
                "Vue.js",
            ],
            name: "",
            selected: null
        }
    },
    computed: {
        filteredDataArray(): string[] {
            return this.data.filter((option) => {
                return (option.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0);
            })
        }
    },
}
</script>

<style>

</style>