<template>
  <o-field label="Name" variant="danger" message="Invalid field">
    <o-input
      icon="user"
      size="large"
      :has-counter="true"
      maxlength="10"
    ></o-input>
  </o-field>

  <o-field label="Name" variant="danger" message="Invalid field">
    <o-select rounded expanded>
      <option>Select dropdown</option>
      <option>With options</option>
    </o-select>
  </o-field>

  <o-field label="Name">
    <o-select size="large">
      <option>Select dropdown</option>
      <option>With options</option>
    </o-select>
  </o-field>

  <o-select placeholder="Select a value" icon="user">
    <option>Select dropdown</option>
    <option>With options</option>
  </o-select>

  <o-field label="Name">
    <o-input icon="user"></o-input>
    <div class="control">
      <a class="button is-info"> Search </a>
    </div>
  </o-field>

  <o-upload v-model="file" class="file-label">
            <span class="file-cta">
                <o-icon class="file-icon" icon="upload"></o-icon>
                <span class="file-label">Click to upload</span>
            </span>
            <span class="file-name" v-if="file">
                {{ file.name }}
            </span>
        </o-upload>

  <hr>

  <o-switch variant="primary"> Yes </o-switch>

   <o-switch disabled variant="primary"> Yes </o-switch>

  <o-switch variant="danger" root-class="is-outlined" passive-variant="warning">
    Allow new items
  </o-switch>
  <o-switch
    variant="danger"
    passive-variant="warning"
    left-label
    :rounded="false"
  >
    Open on focus
  </o-switch>

  <section class="mt-4 mb-4">
    <o-field>
      <o-switch :value="true"> Default </o-switch>
    </o-field>
    <o-field>
      <o-switch :value="true" variant="info"> Info </o-switch>
    </o-field>
    <o-field>
      <o-switch :value="true" variant="success"> Success </o-switch>
    </o-field>
    <o-field>
      <o-switch :value="true" variant="danger"> Danger </o-switch>
    </o-field>
    <o-field>
      <o-switch :value="true" variant="warning"> Warning </o-switch>
    </o-field>
  </section>

  <section class="mt-4 mb-4">
    <o-field>
      <o-checkbox :value="true"> Default </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox :value="true" variant="primary"> Primary </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox :value="true" variant="info"> Info </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox :value="true" variant="success"> Success </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox :value="true" variant="danger"> Danger </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox :value="true" variant="warning"> Warning </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox disabled> Disabled </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox indeterminate>
        Default Indeterminate
      </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox variant="primary" indeterminate>
        Primary Indeterminate
      </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox variant="info" indeterminate> Info Indeterminate </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox variant="success" indeterminate>
        Success Indeterminate
      </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox variant="danger" indeterminate>
        Danger Indeterminate
      </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox variant="warning" indeterminate>
        Warning Indeterminate
      </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox size="small">
        Small
      </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox>
        Default
      </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox size="medium">
        Medium
      </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox size="large">
        Large
      </o-checkbox>
    </o-field>
  </section>

  <o-field label="Name" grouped>
    <o-input icon="user"></o-input>
    <div class="control">
      <a class="button is-info"> Search </a>
    </div>
  </o-field>

  <o-field label="Name">
    <div class="control">
      <a class="button is-info"> Search </a>
    </div>
    <o-input icon="user" expanded></o-input>
    <div class="control">
      <a class="button is-info"> Search </a>
    </div>
  </o-field>

  <o-field horizontal label="Name">
    <o-input icon="user" expanded></o-input>
    <o-input icon="user" rounded expanded></o-input>
  </o-field>

  <o-field label="Grouped">
    <o-select placeholder="Select a character" icon="user">
      <optgroup label="Black Sails">
        <option value="flint">Flint</option>
        <option value="silver">Silver</option>
        <option value="vane">Vane</option>
        <option value="billy">Billy</option>
        <option value="jack">Jack</option>
      </optgroup>

      <optgroup label="Breaking Bad">
        <option value="heisenberg">Heisenberg</option>
        <option value="jesse">Jesse</option>
        <option value="saul">Saul</option>
        <option value="mike">Mike</option>
      </optgroup>

      <optgroup label="Game of Thrones">
        <option value="tyrion-lannister">Tyrion Lannister</option>
        <option value="jamie-lannister">Jamie Lannister</option>
        <option value="daenerys-targaryen">Daenerys Targaryen</option>
        <option value="jon-snow">Jon Snow</option>
      </optgroup>
    </o-select>
  </o-field>
</template>

<script lang="ts">
export default {
  data() {
    return {
      file: null
    }
  }
};
</script>

<style></style>
