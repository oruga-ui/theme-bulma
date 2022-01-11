<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/steps">Steps</router-link> |
    <router-link to="/slider">Slider</router-link> |
    <router-link to="/pagination">Pagination</router-link> |
    <router-link to="/collapse">Collapse</router-link> |
    <router-link to="/form">Form</router-link> |
    <router-link to="/autocomplete">Autocomplete</router-link> |
    <router-link to="/taginput">Taginput</router-link> |
    <router-link to="/button">Button</router-link> |
    <router-link to="/tabs">Tabs</router-link> |
    <router-link to="/tooltip">Tooltip</router-link> |
    <router-link to="/skeleton">Skeleton</router-link> |
    <router-link to="/notification">Notification</router-link> |
    <router-link to="/dropdown">Dropdown</router-link> |
    <router-link to="/datepicker">Datepicker</router-link> |
    <router-link to="/table">Table</router-link> |
    <router-link to="/modal">Modal</router-link> |
    <router-link to="/sidebar">Sidebar</router-link> |
    <router-link to="/loading">Loading</router-link> |
    <router-link to="/timepicker">Timepicker</router-link> |
    <router-link to="/radio">Radio</router-link> |
    <router-link to="/icon">Icon</router-link> |
    <router-link to="/select">Select</router-link> |
    <router-link to="/field">Field</router-link> |
    <router-link to="/carousel">Carousel</router-link> |
  </div>

  <section class="section">
    <router-view />
  </section>
</template>

<style lang="scss">
#nav {
  padding: 10px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
