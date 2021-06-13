<template>

  <div class="columns is-mobile is-centered is-vcentered">
    <div class="column is-narrow">
      <img class="image__oruga" src="https://preview.oruga.io/logo.png">
    </div>
    <div class="column is-narrow">
      <p class="title is-1">=></p>
    </div>
    <div class="column is-narrow">
      <img class="image__bulma" src="https://bulma.io/images/bulma-logo.png">
    </div>
  </div>




   <!--

    <o-field grouped group-multiline>
      <o-switch v-model="isBordered">Bordered</o-switch>
      <o-switch v-model="isStriped">Striped</o-switch>
      <o-switch v-model="isNarrowed">Narrowed</o-switch>
      <o-switch v-model="isHoverable">Hoverable</o-switch>
      <o-switch v-model="isFocusable">Focusable</o-switch>
      <o-switch v-model="isLoading">Loading state</o-switch>
      <o-switch v-model="isEmpty">Empty</o-switch>
      <o-switch v-model="hasMobileCards"
        >Mobile cards <small>(collapsed rows)</small></o-switch
      >
    </o-field>

    <o-table
      :data="isEmpty ? [] : dataTable"
      :bordered="isBordered"
      :striped="isStriped"
      :narrowed="isNarrowed"
      :hoverable="isHoverable"
      :loading="isLoading"
      :focusable="isFocusable"
      :mobile-cards="hasMobileCards"
      v-model:checked-rows="checkedRows"
      checkable
    >
      <o-table-column field="id" label="ID" width="40" numeric v-slot="props">
        {{ props.row.id }}
      </o-table-column>

      <o-table-column field="first_name" label="First Name" v-slot="props">
        {{ props.row.first_name }}
      </o-table-column>

      <o-table-column field="last_name" label="Last Name" v-slot="props">
        {{ props.row.last_name }}
      </o-table-column>

      <o-table-column
        field="date"
        label="Date"
        position="centered"
        v-slot="props"
      >
        {{ new Date(props.row.date).toLocaleDateString() }}
      </o-table-column>

      <o-table-column label="Gender" v-slot="props">
        <span>
          <o-icon
            pack="fas"
            :icon="props.row.gender === 'Male' ? 'mars' : 'venus'"
          >
          </o-icon>
          {{ props.row.gender }}
        </span>
      </o-table-column>
    </o-table>

    -->

  

</template>

<script lang="ts">
import { defineComponent } from "vue";

const dataTable = [
  {
    id: 1,
    first_name: "Jesse",
    last_name: "Simmons",
    date: "2016/10/15 13:43:27",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "John",
    last_name: "Jacobs",
    date: "2016/12/15 06:00:53",
    gender: "Male",
  },
  {
    id: 3,
    first_name: "Tina",
    last_name: "Gilbert",
    date: "2016/04/26 06:26:28",
    gender: "Female",
  },
  {
    id: 4,
    first_name: "Clarence",
    last_name: "Flores",
    date: "2016/04/10 10:28:46",
    gender: "Male",
  },
  {
    id: 5,
    first_name: "Anne",
    last_name: "Lee",
    date: "2016/12/06 14:38:38",
    gender: "Female",
  },
];

export default defineComponent({
  name: "Home",
  props: {
    loading: Boolean,
  },
  data() {
    return {

      showSocial: false,
      isAnimated: true,
      stepsIsRounded: true,
      isStepsClickable: false,

      hasNavigation: true,
      customNavigation: false,
      isProfileSuccess: false,

      stepPrevIcon: "chevron-left",
      stepNextIcon: "chevron-right",
      labelPosition: "bottom",
      // Steps end

      
      
      
      dataTable,
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: true,
      
      checkedRows: [],
      activeTab: 0,
    };
  }
});
</script>

<style scoped>
.image__oruga {
 height: 128px;
}
.image__bulma {
 height: 64px;
}
</style>