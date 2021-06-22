<template>
   <o-field label="Simple">
      <o-slider
        size="medium"
        rounded
        :min="0"
        :max="10"
        variant="primary"
        v-model="slideVal"
      >
        <template v-for="val in [3, 5, 8]" :key="val">
          <o-slider-tick :value="val">{{ val }}</o-slider-tick>
        </template>
      </o-slider>
    </o-field>

    <o-field>
      <o-slider
        :min="0"
        :max="3"
        variant="primary"
        aria-label="Fan"
        :tooltip="false"
      >
        <o-slider-tick :value="0">Off</o-slider-tick>
        <o-slider-tick :value="1">Low</o-slider-tick>
        <o-slider-tick :value="2">High</o-slider-tick>
        <o-slider-tick :value="3">Auto</o-slider-tick>
      </o-slider>
    </o-field>

    <o-field label="Range">
      <o-slider v-model="numbers" variant="primary" :min="1" :max="15" :step="0.5"> </o-slider>
    </o-field>

</template>

<script>
export default {
    data() {
        return {
            slideVal: 2,
            numbers: [2, 5],
        }
    }
}
</script>

<style>

</style>