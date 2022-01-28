<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Login</p>
      <o-icon
        clickable
        native-type="button"
        icon="times"
        @click.native="$emit('close')"
      />
    </header>
    <section class="modal-card-body">
      <o-field label="Email">
        <o-input
          type="email"
          :modelValue="email"
          placeholder="Your email"
          required
        >
        </o-input>
      </o-field>

      <o-field label="Password">
        <o-input
          type="password"
          :modelValue="password"
          password-reveal
          placeholder="Your password"
          required
        >
        </o-input>
      </o-field>

      <o-field>
        <o-checkbox>Remember me</o-checkbox>
      </o-field>
    </section>
    <footer class="modal-card-foot">
      <o-button type="button" @click="$emit('close')">Close</o-button>
      <o-button variant="primary">Login</o-button>
    </footer>
  </div>
</template>

<script>
export default {
  props: ["email", "password"],
};
</script>