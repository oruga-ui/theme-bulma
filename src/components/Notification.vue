<template>
  <section>
    <o-notification closable aria-close-label="Close notification">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
    </o-notification>
    <o-notification
      closable
      variant="info"
      aria-close-label="Close notification"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
    </o-notification>
    <o-notification
      closable
      variant="success"
      aria-close-label="Close notification"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
    </o-notification>
    <o-notification
      closable
      variant="warning"
      aria-close-label="Close notification"
      role="alert"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
    </o-notification>
    <o-notification
      closable
      variant="danger"
      aria-close-label="Close notification"
      role="alert"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
    </o-notification>

    <o-notification
      closable
      type="info"
      variant="info"
      aria-close-label="Close notification"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
    </o-notification>
  </section>
  <hr />
  <section>
    <div class="buttons">
      <o-button label="Launch notification (default)" size="medium" @click="simple" />
      <o-button label="Launch notification (custom)" variant="success" size="medium" @click="success" />
      <o-button label="Launch toast" size="medium" @click="toast" />
      <o-button label="Launch notification (custom)" variant="danger" size="medium" @click="danger" />
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    simple() {
      this.$oruga.notification.open('Something happened')
    },
    success() {
      this.$oruga.notification.open({
        message: 'Something happened correctly!',
        variant: 'success',
        closable: true
      })
    },
    toast() {
      this.$oruga.notification.open({
        message: 'Something happened correctly!',
        rootClass: 'toast-notification',
        position: 'top'
      })
    },
    danger() {
      const notif = this.$oruga.notification.open({
        duration: 5000,
        message: `Something's not good, also I'm on <b>bottom</b>`,
        position: 'bottom-right',
        variant: 'danger',
        closable: true,
        onClose: () => {
          this.$oruga.notification.open('Custom notification closed!')
        }
      })
    }
  }
}
</script>
<style>
.toast-notification {
  margin: 0.5em 0;
  text-align: center;
  box-shadow: 0 1px 4px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
  border-radius: 2em;
  padding: 0.75em 1.5em;
  pointer-events: auto;
  color: rgba(0, 0, 0, 0.7);
  background: #ffdd57;
}
</style>
