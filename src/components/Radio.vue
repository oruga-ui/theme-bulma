<template>
  <section>
    <div class="block">
      <o-radio v-model="radio" name="name" native-value="Flint">
        Flint
      </o-radio>
      <o-radio v-model="radio" name="name" native-value="Silver">
        Silver
      </o-radio>
      <o-radio v-model="radio" name="name" native-value="Jack">
        Jack
      </o-radio>
      <o-radio v-model="radio" name="name" native-value="Vane" disabled>
        Vane
      </o-radio>
    </div>
    <p class="content"><b>Selection:</b> {{ radio }}</p>

    <div class="block">
      <o-field>
        <o-radio v-model="variant" native-value="default">
          Default
        </o-radio>
      </o-field>
      <o-field>
        <o-radio v-model="variant" native-value="info" variant="info">
          Info
        </o-radio>
      </o-field>
      <o-field>
        <o-radio v-model="variant" native-value="success" variant="success">
          Success
        </o-radio>
      </o-field>
      <o-field>
        <o-radio v-model="variant" native-value="danger" variant="danger">
          Danger
        </o-radio>
      </o-field>
      <o-field>
        <o-radio v-model="variant" native-value="warning" variant="warning">
          Warning
        </o-radio>
      </o-field>
    </div>

    <div class="block">
      <o-field>
        <o-radio v-model="size" native-value="small" size="small">
          Small
        </o-radio>
      </o-field>
      <o-field>
        <o-radio v-model="size" native-value="medium" size="medium">
          Medium
        </o-radio>
      </o-field>
      <o-field>
        <o-radio v-model="size" native-value="large" size="large">
          Large
        </o-radio>
      </o-field>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        radio: 'Jack',
        variant: 'success',
        size: 'small'
      }
    }
  }
</script>
