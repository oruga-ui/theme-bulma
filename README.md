<p align="center">
    <img width="240" src="https://raw.githubusercontent.com/oruga-ui/theme-bulma/master/public/logo.svg" />
</p>

<p align="center">
  <i><a href="https://bulma.io" target="_blank">Bulma</a> theme for <a href="https://oruga.io" target="_blank">Oruga</a></i>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@oruga-ui/theme-bulma"><img src="https://img.shields.io/npm/v/@oruga-ui/theme-bulma.svg?logo=npm" /><a>
    <a href="https://www.npmjs.com/package/@oruga-ui/theme-bulma"><img src="https://img.shields.io/npm/dt/@oruga-ui/theme-bulma.svg" /></a>
    <a href="https://discord.gg/RuKuBYN"><img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg?logo=discord" /></a>
</p>

### Install

```sh
npm install @oruga-ui/theme-bulma
```

or

```sh
yarn add @oruga-ui/theme-bulma
```

### Configure

```js
import { createApp } from 'vue'
import App from './App.vue'

import Oruga from '@oruga-ui/oruga-next'
import { bulmaConfig } from '@oruga-ui/theme-bulma'

import '@oruga-ui/theme-bulma/dist/bulma.css'

createApp(App)
    .use(Oruga, bulmaConfig)
    .mount('#app')
```
Please note, the package also works for `@oruga-ui/oruga` (Vue 2) and you can use it without importing the full Oruga bundle.

### Customization (SASS/SCSS)

Using the following sample code you don't need `import '@oruga-ui/theme-bulma/dist/bulma.css'` but you have to add a custom sass/scss file to customize Bulma and theme variables.

```scss
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #8c67ef;
$primary-light: findLightColor($primary);
$primary-dark: findDarkColor($primary);
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Lists and maps
$custom-colors: null !default;
$custom-shades: null !default;

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: mergeColorMaps(
    (
        "white": (
            $white,
            $black,
        ),
        "black": (
            $black,
            $white,
        ),
        "light": (
            $light,
            $light-invert,
        ),
        "dark": (
            $dark,
            $dark-invert,
        ),
        "primary": (
            $primary,
            $primary-invert,
            $primary-light,
            $primary-dark,
        ),
        "link": (
            $link,
            $link-invert,
            $link-light,
            $link-dark,
        ),
        "info": (
            $info,
            $info-invert,
            $info-light,
            $info-dark,
        ),
        "success": (
            $success,
            $success-invert,
            $success-light,
            $success-dark,
        ),
        "warning": (
            $warning,
            $warning-invert,
            $warning-light,
            $warning-dark,
        ),
        "danger": (
            $danger,
            $danger-invert,
            $danger-light,
            $danger-dark,
        ),
    ),
    $custom-colors
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

@import "~bulma/bulma";
@import '~@oruga-ui/theme-bulma/dist/scss/bulma';
```

### Override default config

In case you want to replace the default style of a component you can override or add new classes changing ``bulmaConfig``; more details about components customization on https://oruga.io/documentation/#customization

```js
import { createApp } from 'vue'

import Oruga from '@oruga-ui/oruga-next'
import { bulmaConfig } from '@oruga-ui/theme-bulma'

import '@oruga-ui/theme-bulma/dist/bulma.css'

const customBulmaConfig = {
    ...bulmaConfig,
    checkbox: {
        override: true,
        rootClass: 'checkbox'
    }
}

createApp(App)
    .use(Oruga, customBulmaConfig)
    .mount('#app')
```


## Buefy users

### Components

| Buefy       | Oruga      | Note 
| ----------- | ---------- | ----------------
| Taginput    | Inputitems |
| Toast       | N.A.       | You can customize Notification with `noticeClass` and/or passing a component using programmatic way
| Snackbar    | N.A.       | You can customize Notification with `noticeClass` and/or passing a component using programmatic way

At the moment you won't find Carousel, Dialog, Navbar, Menu but we'll add them soon in Oruga core code.

### Props

| Buefy           | Oruga      | Component      | Note 
| --------------- | ---------- | -------------- | --------------------
| type            | variant    |     -          | Removed prefix `is-`
| size            | size       |     -          | Removed prefix `is-`
| loading         | N.A.       |     -          | Not supported
| label-position  | N.A.       | Field          | Not suppported but you can easily add `is-floating-label` or `is-floating-in-label` class to ``root-class`` prop
| size            | N.A.       | Tooltip        | You can use `multiline-class` or `content-class`
| custom          | N.A.       | Dropdown Item  | You can use ``tag`` prop
| has-modal-card  | N.A.       | Modal          | You have to add `content-class="modal-content"` when you don't use modal-card classes as content


## Contributors
Thank you to everyone involved for improving this project, day by day 💚

<a href="https://github.com/oruga-ui/theme-bulma">
  <img
  src="https://contrib.rocks/image?repo=oruga-ui/theme-bulma"
  />
</a>

[Complete list](CONTRIBUTORS.md).

## Credits

Logo designed by [rubjo](https://github.com/rubjo)

## License

Code released under [MIT](https://github.com/oruga-ui/theme-bulma/blob/master/LICENSE) license.
