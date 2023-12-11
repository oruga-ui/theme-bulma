<script setup lang="ts">
import { ref } from "vue";

const columns = ref([
  {
    field: "id",
    label: "ID",
    width: "40",
    numeric: true,
    sticky: "true",
  },
  {
    field: "first_name",
    label: "First Name",
    sortable: true,
  },
  {
    field: "last_name",
    label: "Last Name",
    sortable: true,
  },
  {
    field: "date",
    label: "Date",
    position: "centered",
    sortable: false,
    display: (v: string) => new Date(v).toLocaleDateString(),
  },
  {
    field: "gender",
    label: "Gender",
    position: "right",
    sortable: true,
    component: (v: string) => ({
      is: "o-icon",
      pack: "fas",
      icon: v === "Male" ? "mars" : "venus",
    }),
  },
]);

const dataTable = ref([
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
  {
    id: 6,
    first_name: "Sara",
    last_name: "Armstrong",
    date: "2016/09/23 18:50:04",
    gender: "Female",
  },
  {
    id: 7,
    first_name: "Anthony",
    last_name: "Webb",
    date: "2016/08/30 23:49:38",
    gender: "Male",
  },
  {
    id: 8,
    first_name: "Andrew",
    last_name: "Greene",
    date: "2016/11/20 14:57:47",
    gender: "Male",
  },
  {
    id: 9,
    first_name: "Russell",
    last_name: "White",
    date: "2016/07/13 09:29:49",
    gender: "Male",
  },
  {
    id: 10,
    first_name: "Lori",
    last_name: "Hunter",
    date: "2016/12/09 01:44:05",
    gender: "Female",
  },
]);

const isEmpty = ref(false);
const isBordered = ref(false);
const isStriped = ref(false);
const isNarrowed = ref(false);
const isHoverable = ref(false);
const isFocusable = ref(false);
const isLoading = ref(false);
const hasMobileCards = ref(true);

const currentPage = ref(1);
const isPaginated = ref(true);
const isPaginationSimple = ref(false);
const paginationPosition = ref("bottom");
const perPage = ref(3);

const checkedRows = ref([]);
const selected = ref(null);
</script>

<template>
  <section>
    <h2>Table Demo</h2>
    <hr />
  </section>

  <section>
    <h3>Sandbox</h3>

    <o-field grouped group-multiline>
      <o-switch v-model="isBordered" :rounded="true" label="Bordered" />
      <o-switch v-model="isStriped" :rounded="true" label="Striped" />
      <o-switch v-model="isNarrowed" :rounded="true" label="Narrowed" />
      <o-switch v-model="isHoverable" :rounded="true" label="Hoverable" />
      <o-switch v-model="isFocusable" :rounded="true" label="Focusable" />
      <o-switch v-model="isLoading" :rounded="true" label="Loading state" />
      <o-switch v-model="isEmpty" :rounded="true" label="Empty" />
      <o-switch v-model="hasMobileCards" :rounded="true">
        Mobile cards
        <small>(collapsed rows)</small>
      </o-switch>
    </o-field>

    <o-table
      v-model:checked-rows="checkedRows"
      :paginated="false"
      :data="isEmpty ? [] : dataTable"
      :bordered="isBordered"
      :striped="isStriped"
      :narrowed="isNarrowed"
      :hoverable="isHoverable"
      :loading="isLoading"
      :focusable="isFocusable"
      :mobile-cards="hasMobileCards"
      checkable
      detailed>
      <o-table-column
        v-for="(column, idx) in columns"
        :key="idx"
        v-slot="{ row }"
        v-bind="column">
        <component
          :is="column.component(row[column.field]).is"
          v-if="column.component"
          v-bind="column.component(row[column.field])" />
        {{
          column.display ? column.display(row[column.field]) : row[column.field]
        }}
      </o-table-column>

      <template #detail="props">
        <tr>
          <td>{{ props.row.id }}</td>
          <td>{{ props.row.first_name }}</td>
          <td>{{ props.row.last_name }}</td>
          <td>{{ props.row.gender }}</td>
        </tr>
      </template>

      <template #bottom-left>
        <b>Total checked</b>: {{ checkedRows.length }}
      </template>
    </o-table>
  </section>

  <section>
    <h3>Paginated</h3>

    <o-field grouped group-multiline>
      <o-switch v-model="isPaginated" :rounded="true" label="Paginated " />
      <o-switch
        v-model="isPaginationSimple"
        :rounded="true"
        label="Simple Paginated" />
      <o-select v-model="perPage" :disabled="!isPaginated">
        <option value="3">3 per page</option>
        <option value="5">5 per page</option>
        <option value="10">10 per page</option>
        <option value="15">15 per page</option>
        <option value="20">20 per page</option>
      </o-select>
      <o-select v-model="paginationPosition" :disabled="!isPaginated">
        <option value="bottom">bottom pagination</option>
        <option value="top">top pagination</option>
        <option value="both">both</option>
      </o-select>
    </o-field>
    <p><b>Page:</b> {{ currentPage }}</p>

    <o-table
      v-model:current-page="currentPage"
      :data="dataTable"
      :paginated="isPaginated"
      :per-page="perPage"
      :pagination-simple="isPaginationSimple"
      :pagination-position="paginationPosition">
      <o-table-column
        v-for="(column, idx) in columns"
        :key="idx"
        v-slot="{ row }"
        v-bind="column">
        <component
          :is="column.component(row[column.field]).is"
          v-if="column.component"
          v-bind="column.component(row[column.field])" />
        {{
          column.display ? column.display(row[column.field]) : row[column.field]
        }}
      </o-table-column>
    </o-table>
  </section>

  <section>
    <h3>Selection</h3>

    <o-button
      variant="danger"
      :disabled="!selected"
      icon-left="times"
      label="Clear selected"
      @click="selected = null" />

    <p><b>Selected:</b> {{ selected }}</p>

    <o-table v-model:selected="selected" :data="dataTable" focusable>
      <o-table-column
        v-for="(column, idx) in columns"
        :key="idx"
        v-slot="{ row }"
        v-bind="column">
        <span>
          <component
            :is="column.component(row[column.field]).is"
            v-if="column.component"
            v-bind="column.component(row[column.field])" />
          {{
            column.display
              ? column.display(row[column.field])
              : row[column.field]
          }}
        </span>
      </o-table-column>
    </o-table>
  </section>
</template>
