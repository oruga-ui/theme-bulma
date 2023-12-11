<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

const today = new Date();
const thisMonth = today.getMonth();
const thisYear = today.getFullYear();
const events = [
  new Date(thisYear, thisMonth, 2),
  new Date(thisYear, thisMonth, 6),
  {
    date: new Date(thisYear, thisMonth, 6),
    type: "info",
  },
  {
    date: new Date(thisYear, thisMonth, 8),
    type: "danger",
  },
  {
    date: new Date(thisYear, thisMonth, 10),
    type: "success",
  },
  {
    date: new Date(thisYear, thisMonth, 10),
    type: "link",
  },
  new Date(thisYear, thisMonth, 12),
  {
    date: new Date(thisYear, thisMonth, 12),
    type: "warning",
  },
  {
    date: new Date(thisYear, thisMonth, 16),
    type: "danger",
  },
  new Date(thisYear, thisMonth, 20),
  {
    date: new Date(thisYear, thisMonth, 29),
    type: "success",
  },
  {
    date: new Date(thisYear, thisMonth, 29),
    type: "warning",
  },
  {
    date: new Date(thisYear, thisMonth, 29),
    type: "info",
  },
];

const months = [
  { name: "January", value: 0 },
  { name: "February", value: 1 },
  { name: "March", value: 2 },
  { name: "April", value: 3 },
  { name: "May", value: 4 },
  { name: "June", value: 5 },
  { name: "July", value: 6 },
  { name: "August", value: 7 },
  { name: "September", value: 8 },
  { name: "October", value: 9 },
  { name: "November", value: 10 },
  { name: "December", value: 11 },
];

const showWeekNumber = ref(false);
const locale = ref(); // Browser locale

const bars = ref(false);
const indicators = computed((): string => (bars.value ? "bars" : "dots"));

const selected = ref(new Date());
const selectedString = computed(() =>
  selected.value ? selected.value.toDateString() : "",
);

const date = ref<Date | null>(new Date());
const multiple = ref([]);
const range = ref([]);

const minDate = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);
const maxDate = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 7,
);

const month = ref();

function selectMonth(option: { name: string; value: number }) {
  if (!option || !date.value) return;

  date.value.setMonth(option.value);
}

onMounted(() => {
  month.value = months.filter(
    (item) => item.value == date.value?.getMonth(),
  )[0].name;
});
const datepicker = ref<any>(null);
</script>

<template>
  <section>
    <h2>Datepicker Demo</h2>
    <hr />
  </section>

  <section>
    <h3>Base</h3>

    <o-field grouped>
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
        <o-switch v-model="showWeekNumber" label="Show week number" />
      </o-field>
    </o-field>

    <o-field label="Select a date">
      <o-datepicker
        v-model="selected"
        :show-week-number="showWeekNumber"
        :locale="locale"
        placeholder="Click to select..."
        icon="calendar"
        :events="events"
        :indicators="indicators"
        trap-focus />
    </o-field>
    <p><b>Selected:</b> {{ selected }}</p>
  </section>

  <section>
    <h3>Min/Max date</h3>

    <o-field label="Select a date">
      <o-datepicker
        placeholder="Click to select..."
        icon="calendar"
        :min-date="minDate"
        :max-date="maxDate" />
    </o-field>
  </section>

  <section>
    <h3>Range</h3>

    <o-field label="Select a date">
      <o-datepicker
        v-model="range"
        :show-week-number="showWeekNumber"
        :locale="locale"
        placeholder="Click to select..."
        icon="calendar"
        trap-focus
        range />
    </o-field>
    <p><b>Selected:</b> {{ range }}</p>
  </section>

  <section>
    <h3>Multiple</h3>

    <o-field label="Select a date">
      <o-datepicker
        v-model="multiple"
        multiple
        placeholder="Click to select..." />
    </o-field>
    <p><b>Selected:</b> {{ multiple }}</p>
  </section>

  <section>
    <h3>Trigger</h3>

    <o-field label="Select a date" grouped>
      <o-datepicker v-model="selected">
        <template #trigger>
          <o-button icon-left="calendar" type="primary" />
        </template>
      </o-datepicker>
      <o-input v-model="selectedString" readonly expanded />
    </o-field>
  </section>

  <section>
    <h3>Programmatically</h3>

    <o-field>
      <o-datepicker ref="datepicker" expanded placeholder="Select a date" />

      <o-button
        icon-left="calendar"
        type="primary"
        @click="datepicker?.toggle()" />
    </o-field>
  </section>

  <section>
    <h3>Slots</h3>

    <o-field label="Select a date">
      <o-datepicker
        v-model="date"
        :first-day-of-week="1"
        placeholder="Click to select...">
        <template #header>
          <o-field>
            <o-autocomplete
              v-model="month"
              root-class="flex-grow-1"
              open-on-focus
              readonly
              :data="months"
              field="name"
              expanded
              @select="selectMonth" />
            <o-button disabled>{{ date?.getFullYear() }}</o-button>
          </o-field>
        </template>
        <template #footer>
          <div class="d-flex justify-content-end mt-2">
            <o-button variant="primary" @click="date = new Date()">
              <o-icon icon="calendar" />
              <span>Today</span>
            </o-button>

            <o-button variant="danger" @click="date = null">
              <o-icon icon="times" />
              <span>Clear</span>
            </o-button>
          </div>
        </template>
      </o-datepicker>
    </o-field>
  </section>

  <section>
    <h3>Events</h3>

    <o-field>
      <o-switch v-model="bars" label="Bars" />
    </o-field>

    <o-datepicker
      v-model="date"
      inline
      :events="events"
      :indicators="indicators" />
  </section>

  <section>
    <h3>Month picker</h3>

    <o-field label="Select a month">
      <o-datepicker
        placeholder="Click to select..."
        icon="calendar"
        type="month" />
    </o-field>
  </section>
</template>
