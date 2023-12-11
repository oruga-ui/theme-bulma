<script setup lang="ts">
import { ref } from "vue";

const showWeekNumber = ref(false);
const enableSeconds = ref(false);
const hourFormat = ref(); // Browser locale
const locale = ref(); // Browser locale

const datetime = ref<Date | null>(new Date());

const minDatetime = ref(null);
const maxDatetime = ref(null);
</script>

<template>
  <section>
    <h2>Datetimepicker Demo</h2>
    <hr />
  </section>

  <section>
    <h2>Base</h2>

    <o-field grouped>
      <o-field>
        <o-switch v-model="showWeekNumber" label="Show week number" />
      </o-field>
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

    <o-field label="Select datetime">
      <o-datetimepicker
        rounded
        placeholder="Click to select..."
        icon="calendar"
        :locale="locale"
        :datepicker="{ showWeekNumber }"
        :timepicker="{ enableSeconds, hourFormat }" />
    </o-field>
  </section>

  <section>
    <h3>Inline</h3>

    <o-datetimepicker v-model="datetime" inline />
  </section>

  <section>
    <h3>Footer</h3>

    <o-field label="Select datetime">
      <o-datetimepicker v-model="datetime" placeholder="Click to select...">
        <template #footer>
          <div class="d-flex justify-content-center mt-3">
            <o-button variant="primary" @click="datetime = new Date()">
              <o-icon icon="calendar" />
              <span>Today</span>
            </o-button>
            <o-button variant="danger" @click="datetime = null">
              <o-icon icon="times" />
              <span>Clear</span>
            </o-button>
          </div>
        </template>
      </o-datetimepicker>
    </o-field>
  </section>

  <section>
    <h3>Min/Max Datetime</h3>

    <o-field grouped>
      <o-field label="Min Datetime">
        <o-datetimepicker
          v-model="minDatetime"
          rounded
          placeholder="Click to select..."
          icon="calendar"
          editable />
      </o-field>
      <o-field label="Max Datetime">
        <o-datetimepicker
          v-model="maxDatetime"
          rounded
          placeholder="Click to select..."
          icon="calendar"
          editable />
      </o-field>
    </o-field>

    <o-field label="Select datetime">
      <o-datetimepicker
        rounded
        placeholder="Click to select..."
        icon="calendar"
        :min-datetime="minDatetime"
        :max-datetime="maxDatetime" />
    </o-field>
  </section>
</template>
