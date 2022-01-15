<template>
  <div class="columns">
    <div class="column">
      <section>
        <o-field grouped group-multiline>
          <o-field>
            <o-select v-model="locale" placeholder="Locale">
              <option :value="undefined"></option>
              <option value="de-DE">de-DE</option>
              <option value="en-CA">en-CA</option>
              <option value="en-GB">en-GB</option>
              <option value="en-US">en-US</option>
              <option value="es-ES">es-ES</option>
              <option value="es-MX">es-MX</option>
              <option value="fr-CA">fr-CA</option>
              <option value="fr-FR">fr-FR</option>
              <option value="it-IT">it-IT</option>
              <option value="ja-JP">ja-JP</option>
              <option value="pt-BR">pt-BR</option>
              <option value="ru-RU">ru-RU</option>
            </o-select>
          </o-field>
          <o-field>
            <o-switch v-model="showWeekNumber">Show week number</o-switch>
          </o-field>
        </o-field>
        <o-field label="Select a date">
          <o-datepicker
            v-model="selected"
            :show-week-number="showWeekNumber"
            :locale="locale"
            placeholder="Click to select..."
            icon="calendar"
            trap-focus
          >
          </o-datepicker>
        </o-field>
      </section>
    </div>
    <div class="column">
      <span>
        <o-field>
          <o-switch v-model="bars">Bars</o-switch>
        </o-field>
        <o-datepicker
          inline
          v-model="date"
          :events="events"
          :indicators="indicators"
        >
        </o-datepicker>
      </span>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <o-datepicker
          range
          v-model="dates"
        >
       </o-datepicker>
    </div>
    <div class="column">
      <o-datepicker
          v-model="date1"
        >
        <o-button icon-left="calendar" variant="primary" @click="date1 = new Date()">
          Today
        </o-button>
        <o-button icon-left="times" variant="danger" @click="date1 = null">
         Clear
        </o-button>
       </o-datepicker>
    </div>
  </div>
</template>

<script lang="ts">
const thisMonth = new Date().getMonth();


import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    indicators(): string {
      return this.bars ? "bars" : "dots";
    },
  },
  data() {
    return {
      selected: new Date(),
      showWeekNumber: false,
      locale: undefined, // Browser locale
      date: new Date(2017, thisMonth, 1),
      dates: [],
      date1: null as Date | null,
      events: [
        new Date(2017, thisMonth, 2),
        new Date(2017, thisMonth, 6),
        {
          date: new Date(2017, thisMonth, 6),
          type: "info",
        },
        {
          date: new Date(2017, thisMonth, 8),
          type: "danger",
        },
        {
          date: new Date(2017, thisMonth, 10),
          type: "success",
        },
        {
          date: new Date(2017, thisMonth, 10),
          type: "link",
        },
        new Date(2017, thisMonth, 12),
        {
          date: new Date(2017, thisMonth, 12),
          type: "warning",
        },
        {
          date: new Date(2017, thisMonth, 16),
          type: "danger",
        },
        new Date(2017, thisMonth, 20),
        {
          date: new Date(2017, thisMonth, 29),
          type: "success",
        },
        {
          date: new Date(2017, thisMonth, 29),
          type: "warning",
        },
        {
          date: new Date(2017, thisMonth, 29),
          type: "info",
        },
      ],
      bars: false,
    };
  },
});
</script>