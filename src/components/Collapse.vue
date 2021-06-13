<template>
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
</template>

<script>
export default {
    data() {
        return {
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
        }
    }
}
</script>

<style>

</style>