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

Please note, this package can be used without importing any other Oruga styling or theme.


### Customization (SASS/SCSS)

Bulma is a highly customizable CSS framework. From colors to typography, spacing and sizes, forms and layouts, all parts of Bulma can be customized by the user (see [Bulma Customization](https://bulma.io/documentation/customize/concepts/)).

Using the following sample code you don't need `import '@oruga-ui/theme-bulma/dist/bulma.css'` but you have to add a custom sass/scss file to customize Bulma and the theme variables. To overwrite Bulma’s Sass variables with your own values, write `@use` and the `with` keyword, which takes a Sass map:

```scss
// set your color overrides
$primary: #8c67ef;
$link: $primary;

// add new colors to the colors map
$twitter: #4099FF;
$custom-colors: ('twitter', $twitter);

@use '@oruga-ui/theme-bulma/dist/scss/bulma' with (
    $family-primary: '"Nunito", sans-serif',
    $primary: $primary,
    $link: $link,
    $custom-colors: $custom-colors,
);
```

### Override default config

In case you want to replace the default style of a component you can override or add new classes changing ``bulmaConfig``; more details about components customization on https://oruga-ui.com/documentation/customisation.html

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
