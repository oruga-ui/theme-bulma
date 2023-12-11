<script setup lang="ts">
import { ref } from "vue";

const time = ref<Date | null>(null);
const hourFormat = ref(undefined); // Browser locale
const enableSeconds = ref(false);
const locale = ref(undefined); // Browser locale

const min = new Date();
min.setHours(9);
min.setMinutes(0);
const max = new Date();
max.setHours(18);
max.setMinutes(0);

const minTime = ref(min);
const maxTime = ref(max);

const minutesGranularity = ref(5);
const hoursGranularity = ref(2);
</script>

<template>
  <section>
    <h2>Timepicker Demo</h2>
    <hr />
  </section>

  <section>
    <h3>Base</h3>

    <o-field grouped>
      <o-field>
        <o-switch v-model="enableSeconds" label="Enable seconds" />
      </o-field>
      <o-field label="Locale">
        <o-select v-model="locale">
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
          <option value="zn-CN">zn-CN</option>
        </o-select>
      </o-field>
      <o-field label="Hour format">
        <o-select v-model="hourFormat">
          <option :value="undefined"></option>
          <option value="12">12</option>
          <option value="24">24</option>
        </o-select>
      </o-field>
    </o-field>

    <o-field label="Select time">
      <o-timepicker
        rounded
        placeholder="Click to select..."
        icon="clock"
        :enable-seconds="enableSeconds"
        :hour-format="hourFormat"
        :locale="locale" />
    </o-field>
  </section>

  <section>
    <h3>Inline</h3>

    <o-timepicker v-model="time" inline />
  </section>

  <section>
    <h3>Min/Max date</h3>

    <o-field label="Select time">
      <o-timepicker
        placeholder="Click to select..."
        :min-time="minTime"
        :max-time="maxTime" />
    </o-field>
  </section>

  <section>
    <h3>Slot</h3>

    <o-field label="Select time">
      <o-timepicker v-model="time" placeholder="Click to select...">
        <o-button
          label="Now"
          variant="primary"
          icon-left="clock"
          @click="time = new Date()" />
        <o-button
          label="Clear"
          variant="danger"
          icon-left="times"
          outlined
          @click="time = null" />
      </o-timepicker>
    </o-field>
  </section>

  <section>
    <h3>Granularity</h3>

    <o-field label="Select time">
      <o-timepicker
        placeholder="Click to select"
        icon="clock"
        :increment-minutes="minutesGranularity"
        :increment-hours="hoursGranularity" />
    </o-field>
  </section>
</template>
