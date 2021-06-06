<template>
  <div class="section">
    <o-field grouped group-multiline>
      <o-field label="Total">
        <o-input type="number" v-model="total"></o-input>
      </o-field>
      <o-field label="Items per page">
        <o-input type="number" v-model="perPage"></o-input>
      </o-field>
    </o-field>
    <o-field grouped group-multiline>
      <o-field label="Show buttons before current">
        <o-input type="number" v-model="rangeBefore" min="0"></o-input>
      </o-field>
      <o-field label="Show buttons after current">
        <o-input type="number" v-model="rangeAfter" min="0"></o-input>
      </o-field>
    </o-field>
    <o-field grouped group-multiline>
      <o-field label="Order">
        <o-select v-model="order">
          <option value="">default</option>
          <option value="centered">centered</option>
          <option value="right">right</option>
        </o-select>
      </o-field>
      <o-field label="Size">
        <o-select v-model="size">
          <option value="">default</option>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </o-select>
      </o-field>
    </o-field>
    <o-field grouped group-multiline>
      <o-field label="Previous icon">
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
    </o-field>
    <div class="block">
      <o-switch v-model="isSimple">Simple</o-switch>
      <o-switch v-model="isRounded">Rounded</o-switch>
    </div>

    <o-pagination
      :total="total"
      v-model:current="current"
      :range-before="rangeBefore"
      :range-after="rangeAfter"
      :order="order"
      :size="size"
      :simple="isSimple"
      :rounded="isRounded"
      :per-page="perPage"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
    </o-pagination>

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

    <o-collapse
      class="card"
      animation="slide"
      v-for="(collapse, index) of collapses"
      :key="index"
      :open="isOpen == index"
      @update:open="isOpen = index"
    >
      <template v-slot:trigger="props">
        <div class="card-header" role="button">
          <p class="card-header-title">
            {{ collapse.title }}
          </p>
          <a class="card-header-icon">
            <o-icon :icon="props.open ? 'caret-up' : 'caret-down'"> </o-icon>
          </a>
        </div>
      </template>
      <div class="card-content">
        <div class="content">
          {{ collapse.text }}
        </div>
      </div>
    </o-collapse>

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

    <div class="block">
      <o-switch
        v-model="allowNew"
        variant="danger"
        root-class="is-outlined"
        passive-variant="warning"
      >
        Allow new items
      </o-switch>
      <o-switch
        v-model="openOnFocus"
        variant="danger"
        passive-variant="warning"
        left-label
        :rounded="false"
      >
        Open on focus
      </o-switch>
    </div>
    <o-field label="Enter some items">
      <o-inputitems
        v-model="tags"
        :data="filteredTags"
        autocomplete
        :allow-new="allowNew"
        :open-on-focus="openOnFocus"
        field="user.first_name"
        icon="tag"
        placeholder="Add an item"
        @typing="getFilteredTags"
      >
      </o-inputitems>
    </o-field>
    <p class="content"><b>Items:</b> {{ tags }}</p>

    <o-field label="Name" variant="danger" message="Invalid field">
      <o-input
        icon="user"
        size="large"
        :has-counter="true"
        maxlength="10"
      ></o-input>
    </o-field>

    <o-field label="Name" variant="danger" message="Invalid field">
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
        <a class="button is-info"> Search </a>
      </div>
    </o-field>

    <o-field label="Name" grouped>
      <o-input icon="user"></o-input>
      <div class="control">
        <a class="button is-info"> Search </a>
      </div>
    </o-field>

    <o-field label="Name">
      <div class="control">
        <a class="button is-info"> Search </a>
      </div>
      <o-input icon="user" expanded></o-input>
      <div class="control">
        <a class="button is-info"> Search </a>
      </div>
    </o-field>

    <o-field horizontal label="Name">
      <o-input icon="user" expanded></o-input>
      <o-input icon="user" rounded expanded></o-input>
    </o-field>

    <o-field label="Grouped">
      <o-select placeholder="Select a character" icon="user">
        <optgroup label="Black Sails">
          <option value="flint">Flint</option>
          <option value="silver">Silver</option>
          <option value="vane">Vane</option>
          <option value="billy">Billy</option>
          <option value="jack">Jack</option>
        </optgroup>

        <optgroup label="Breaking Bad">
          <option value="heisenberg">Heisenberg</option>
          <option value="jesse">Jesse</option>
          <option value="saul">Saul</option>
          <option value="mike">Mike</option>
        </optgroup>

        <optgroup label="Game of Thrones">
          <option value="tyrion-lannister">Tyrion Lannister</option>
          <option value="jamie-lannister">Jamie Lannister</option>
          <option value="daenerys-targaryen">Daenerys Targaryen</option>
          <option value="jon-snow">Jon Snow</option>
        </optgroup>
      </o-select>
    </o-field>

    <h2 class="is-size-3">Slider:</h2>
    <o-field label="Simple">
      <o-slider v-model="sliderValue"></o-slider>
    </o-field>
    <o-field label="Rounded thumb">
      <o-slider rounded></o-slider>
    </o-field>
    <o-field label="Disabled">
      <o-slider :value="30" disabled></o-slider>
    </o-field>
    <o-field label="Danger range">
      <o-slider
        v-model="numbers2"
        variant="danger"
        :min="-2"
        :max="8"
        :step="2"
      >
      </o-slider>
    </o-field>

    <section>
      <h2 class="is-size-3">Steps</h2>
      <p>
        <o-field grouped group-multiline>
          <div class="control">
            <o-switch v-model="showSocial"> Show Social step </o-switch>
          </div>
          <div class="control">
            <o-switch v-model="isAnimated"> Animated </o-switch>
          </div>
          <div class="control">
            <o-switch v-model="stepsIsRounded"> Rounded </o-switch>
          </div>
          <div class="control">
            <o-switch v-model="isStepsClickable"> Clickable Marker </o-switch>
          </div>
        </o-field>
        <o-field grouped group-multiline>
          <div class="control">
            <o-switch v-model="hasNavigation"> Navigation Buttons </o-switch>
          </div>
          <div class="control">
            <o-switch v-model="customNavigation"> Custom Navigation </o-switch>
          </div>
          <div class="control">
            <o-switch v-model="isProfileSuccess">
              Set <code>success</code> for profile
            </o-switch>
          </div>
        </o-field>
        <o-field v-if="hasNavigation" grouped group-multiline>
          <o-field label="Prev icon">
            <o-select v-model="stepPrevIcon">
              <option value="chevron-left">Chevron</option>
              <option value="arrow-left">Arrow</option>
            </o-select>
          </o-field>
          <o-field label="Next icon">
            <o-select v-model="stepNextIcon">
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
        </o-field>
      </p>
      <o-steps
        v-model="activeStep"
        :animated="isAnimated"
        :rounded="stepsIsRounded"
        :has-navigation="hasNavigation"
        :icon-prev="stepPrevIcon"
        :icon-next="stepNextIcon"
        :label-position="labelPosition"
      >
        <o-step-item step="1" label="Account" :clickable="isStepsClickable">
          <h1 class="title has-text-centered">Account</h1>
          Lorem Account dolor sit amet.
        </o-step-item>

        <o-step-item
          step="2"
          label="Profile"
          :clickable="isStepsClickable"
          :variant="{ success: isProfileSuccess }"
        >
          <h1 class="title has-text-centered">Profile</h1>
          Lorem Profile dolor sit amet.
        </o-step-item>

        <o-step-item
          step="3"
          :visible="showSocial"
          label="Social"
          :clickable="isStepsClickable"
        >
          <h1 class="title has-text-centered">Social</h1>
          Lorem Social dolor sit amet.
        </o-step-item>

        <o-step-item
          :step="showSocial ? '4' : '3'"
          label="Finish"
          :clickable="isStepsClickable"
          disabled
        >
          <h1 class="title has-text-centered">Finish</h1>
          Lorem Finish dolor sit amet.
        </o-step-item>

        <template
          v-if="customNavigation"
          slot="navigation"
          slot-scope="{ previous, next }"
        >
          <o-button
            outlined
            variant="danger"
            icon-pack="fas"
            icon-left="backward"
            :disabled="previous.disabled"
            @click.prevent="previous.action"
          >
            Previous
          </o-button>
          <o-button
            outlined
            variant="success"
            icon-pack="fas"
            icon-right="forward"
            :disabled="next.disabled"
            @click.prevent="next.action"
          >
            Next
          </o-button>
        </template>
      </o-steps>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const data = [
  {
    id: 1,
    user: { first_name: "Jesse", last_name: "Simmons" },
    date: "2016/10/15 13:43:27",
    gender: "Male",
  },
  {
    id: 2,
    user: { first_name: "John", last_name: "Jacobs" },
    date: "2016/12/15 06:00:53",
    gender: "Male",
  },
  {
    id: 3,
    user: { first_name: "Tina", last_name: "Gilbert" },
    date: "2016/04/26 06:26:28",
    gender: "Female",
  },
  {
    id: 4,
    user: { first_name: "Clarence", last_name: "Flores" },
    date: "2016/04/10 10:28:46",
    gender: "Male",
  },
  {
    id: 5,
    user: { first_name: "Anne", last_name: "Lee" },
    date: "2016/12/06 14:38:38",
    gender: "Female",
  },
  {
    id: 6,
    user: { first_name: "Sara", last_name: "Armstrong" },
    date: "2016/09/23 18:50:04",
    gender: "Female",
  },
  {
    id: 7,
    user: { first_name: "Anthony", last_name: "Webb" },
    date: "2016/08/30 23:49:38",
    gender: "Male",
  },
  {
    id: 8,
    user: { first_name: "Andrew", last_name: "Greene" },
    date: "2016/11/20 14:57:47",
    gender: "Male",
  },
  {
    id: 9,
    user: { first_name: "Russell", last_name: "White" },
    date: "2016/07/13 09:29:49",
    gender: "Male",
  },
  {
    id: 10,
    user: { first_name: "Lori", last_name: "Hunter" },
    date: "2016/12/09 01:44:05",
    gender: "Female",
  },
  {
    id: 11,
    user: { first_name: "Ronald", last_name: "Wood" },
    date: "2016/12/04 02:23:48",
    gender: "Male",
  },
  {
    id: 12,
    user: { first_name: "Michael", last_name: "Harper" },
    date: "2016/07/27 13:28:15",
    gender: "Male",
  },
  {
    id: 13,
    user: { first_name: "George", last_name: "Dunn" },
    date: "2017/03/07 12:26:52",
    gender: "Male",
  },
  {
    id: 14,
    user: { first_name: "Eric", last_name: "Rogers" },
    date: "2016/06/07 05:41:52",
    gender: "Male",
  },
  {
    id: 15,
    user: { first_name: "Juan", last_name: "Meyer" },
    date: "2017/02/01 04:56:34",
    gender: "Male",
  },
  {
    id: 16,
    user: { first_name: "Silvia", last_name: "Rosa" },
    date: "2017/01/26 11:50:04",
    gender: "Female",
  },
  {
    id: 17,
    user: { first_name: "Lori", last_name: "Cunningham" },
    date: "2016/05/01 10:00:56",
    gender: "Female",
  },
  {
    id: 18,
    user: { first_name: "Charles", last_name: "Graham" },
    date: "2016/05/31 06:43:30",
    gender: "Male",
  },
  {
    id: 19,
    user: { first_name: "Henry", last_name: "Morrison" },
    date: "2016/09/27 16:15:44",
    gender: "Male",
  },
  {
    id: 20,
    user: { first_name: "Albert", last_name: "Mendoza" },
    date: "2016/08/08 05:29:24",
    gender: "Male",
  },
  {
    id: 21,
    user: { first_name: "Ruby", last_name: "Snyder" },
    date: "2017/04/01 12:04:39",
    gender: "Female",
  },
  {
    id: 22,
    user: { first_name: "Jesse", last_name: "Warren" },
    date: "2016/08/20 01:36:38",
    gender: "Male",
  },
  {
    id: 23,
    user: { first_name: "Carlos", last_name: "Ferguson" },
    date: "2016/05/31 10:40:29",
    gender: "Male",
  },
  {
    id: 24,
    user: { first_name: "Melissa", last_name: "Peters" },
    date: "2016/07/23 00:41:54",
    gender: "Female",
  },
  {
    id: 25,
    user: { first_name: "Arthur", last_name: "Garza" },
    date: "2017/03/11 14:11:37",
    gender: "Male",
  },
  {
    id: 26,
    user: { first_name: "Joe", last_name: "Berry" },
    date: "2016/07/09 15:16:56",
    gender: "Male",
  },
  {
    id: 27,
    user: { first_name: "Joseph", last_name: "Bishop" },
    date: "2016/10/04 19:44:54",
    gender: "Male",
  },
  {
    id: 28,
    user: { first_name: "Sarah", last_name: "Harper" },
    date: "2016/09/23 05:09:11",
    gender: "Female",
  },
  {
    id: 29,
    user: { first_name: "Christopher", last_name: "Fuller" },
    date: "2016/04/12 00:05:35",
    gender: "Male",
  },
  {
    id: 30,
    user: { first_name: "Alan", last_name: "Mendoza" },
    date: "2016/04/22 10:48:02",
    gender: "Male",
  },
  {
    id: 31,
    user: { first_name: "James", last_name: "Davis" },
    date: "2017/01/16 15:17:03",
    gender: "Male",
  },
  {
    id: 32,
    user: { first_name: "Scott", last_name: "Welch" },
    date: "2016/10/04 23:31:51",
    gender: "Male",
  },
  {
    id: 33,
    user: { first_name: "Mildred", last_name: "Myers" },
    date: "2016/11/23 13:46:18",
    gender: "Female",
  },
  {
    id: 34,
    user: { first_name: "Victor", last_name: "Martinez" },
    date: "2016/04/06 17:05:07",
    gender: "Male",
  },
  {
    id: 35,
    user: { first_name: "Susan", last_name: "Medina" },
    date: "2016/12/09 10:33:37",
    gender: "Female",
  },
  {
    id: 36,
    user: { first_name: "Judy", last_name: "Long" },
    date: "2016/07/26 16:19:04",
    gender: "Female",
  },
  {
    id: 37,
    user: { first_name: "Joan", last_name: "Myers" },
    date: "2016/09/22 04:55:54",
    gender: "Female",
  },
  {
    id: 38,
    user: { first_name: "Rachel", last_name: "Gonzales" },
    date: "2016/07/15 13:56:38",
    gender: "Female",
  },
  {
    id: 39,
    user: { first_name: "Roger", last_name: "Hunt" },
    date: "2016/08/14 10:43:11",
    gender: "Male",
  },
  {
    id: 40,
    user: { first_name: "Dorothy", last_name: "Howard" },
    date: "2016/06/19 05:34:49",
    gender: "Female",
  },
  {
    id: 41,
    user: { first_name: "Eugene", last_name: "Lynch" },
    date: "2016/12/24 08:19:24",
    gender: "Male",
  },
  {
    id: 42,
    user: { first_name: "Kathy", last_name: "Webb" },
    date: "2017/04/01 21:09:05",
    gender: "Female",
  },
  {
    id: 43,
    user: { first_name: "Antonio", last_name: "White" },
    date: "2017/02/10 06:51:20",
    gender: "Male",
  },
  {
    id: 44,
    user: { first_name: "Louis", last_name: "Spencer" },
    date: "2016/10/08 02:20:22",
    gender: "Male",
  },
  {
    id: 45,
    user: { first_name: "Andrea", last_name: "Marshall" },
    date: "2016/09/04 10:59:57",
    gender: "Female",
  },
  {
    id: 46,
    user: { first_name: "Eugene", last_name: "Sims" },
    date: "2017/03/15 06:39:48",
    gender: "Male",
  },
  {
    id: 47,
    user: { first_name: "Mildred", last_name: "Gibson" },
    date: "2016/04/18 06:43:54",
    gender: "Female",
  },
  {
    id: 48,
    user: { first_name: "Joan", last_name: "Arnold" },
    date: "2016/12/16 04:52:23",
    gender: "Female",
  },
  {
    id: 49,
    user: { first_name: "Jesse", last_name: "Schmidt" },
    date: "2016/06/11 02:44:33",
    gender: "Male",
  },
  {
    id: 50,
    user: { first_name: "David", last_name: "Frazier" },
    date: "2017/02/15 21:46:30",
    gender: "Male",
  },
  {
    id: 51,
    user: { first_name: "Nicholas", last_name: "Howell" },
    date: "2016/11/01 15:08:31",
    gender: "Male",
  },
  {
    id: 52,
    user: { first_name: "Douglas", last_name: "Chapman" },
    date: "2017/02/08 03:33:24",
    gender: "Male",
  },
  {
    id: 53,
    user: { first_name: "Bruce", last_name: "Simmons" },
    date: "2016/07/14 12:11:17",
    gender: "Male",
  },
  {
    id: 54,
    user: { first_name: "Antonio", last_name: "George" },
    date: "2016/11/07 19:12:55",
    gender: "Male",
  },
  {
    id: 55,
    user: { first_name: "Chris", last_name: "Marshall" },
    date: "2016/07/03 12:11:45",
    gender: "Male",
  },
  {
    id: 56,
    user: { first_name: "Ashley", last_name: "Hudson" },
    date: "2016/10/14 21:08:05",
    gender: "Female",
  },
  {
    id: 57,
    user: { first_name: "Alan", last_name: "Edwards" },
    date: "2017/03/22 21:10:25",
    gender: "Male",
  },
  {
    id: 58,
    user: { first_name: "George", last_name: "Clark" },
    date: "2016/04/28 03:15:05",
    gender: "Male",
  },
  {
    id: 59,
    user: { first_name: "Frank", last_name: "Porter" },
    date: "2016/09/08 00:48:14",
    gender: "Male",
  },
  {
    id: 60,
    user: { first_name: "Christopher", last_name: "Palmer" },
    date: "2016/05/24 08:58:12",
    gender: "Male",
  },
];

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
      tmp: "a",
      rounded: true,
      data2: data,
      sliderValue: 12,
      numbers2: [2, 6],
      // Steps start
      activeStep: 0,

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
      selected: null,
      filteredTags: data,
      tags: [],
      allowNew: false,
      openOnFocus: false,
      isOpen: 0,
      collapses: [
        {
          title: "Title 1",
          text: "Text 1",
        },
        {
          title: "Title 2",
          text: "Text 2",
        },
        {
          title: "Title 3",
          text: "Text 3",
        },
      ],
      dataTable,
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: true,
      total: 200,
      current: 10,
      perPage: 10,
      rangeBefore: 3,
      rangeAfter: 1,
      order: "",
      size: "",
      isSimple: false,
      isRounded: false,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
    };
  },
  computed: {
    hello(): string {
      return this.tmp;
    },
    filteredDataArray(): string[] {
      return this.data.filter((option) => {
        return (
          option.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0
        );
      });
    },
  },
  methods: {
    getFilteredTags(text: string) {
      this.filteredTags = data.filter((option) => {
        return (
          option.user.first_name
            .toString()
            .toLowerCase()
            .indexOf(text.toLowerCase()) >= 0
        );
      });
    },
  },
  mounted() {
    setTimeout(() => {
      this.rounded = false;
    }, 3 * 1000);
  },
});
</script>
