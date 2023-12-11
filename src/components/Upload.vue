<script setup lang="ts">
import { ref } from "vue";

const dropFiles = ref<File[]>([]);
const file = ref<File | null>(null);

function deleteDropFile(index: number) {
  dropFiles.value.splice(index, 1);
}
</script>

<template>
  <section>
    <h2>Upload Demo</h2>
    <hr />
  </section>

  <section>
    <h3>Base</h3>

    <o-field class="file">
      <o-upload v-model="file">
        <o-button
          tag="a"
          variant="primary"
          icon-left="upload"
          label="Click to upload" />
      </o-upload>
    </o-field>
    <p><b>Selected File:</b> {{ file?.name }}</p>
  </section>

  <section>
    <h3>Drag&Drop</h3>

    <o-field>
      <o-upload v-model="dropFiles" multiple variant="info" expanded drag-drop>
        <section class="ex-center">
          <p>
            <o-icon icon="upload" size="large" />
          </p>
          <p>Drop your files here or click to upload</p>
        </section>
      </o-upload>
    </o-field>

    <div class="tags">
      <span v-for="(f, index) in dropFiles" :key="index">
        {{ f.name }}
        <o-button
          icon-left="times"
          size="small"
          native-type="button"
          @click="deleteDropFile(index)" />
      </span>
    </div>
  </section>
</template>

<style scoped lang="scss">
.ex-center {
  p {
    text-align: center;
  }
}
</style>
