<p align="center">
    <img width="240" src="https://raw.githubusercontent.com/oruga-ui/theme-bulma/master/public/logo.svg" />
</p>

<p align="center">
  <i><a href="https://bulma.io" target="_blank">Bulma</a> theme for <a href="https://oruga-ui.com" target="_blank">Oruga</a></i>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@oruga-ui/theme-bulma"><img src="https://img.shields.io/npm/v/@oruga-ui/theme-bulma.svg?logo=npm" /><a>
    <a href="https://www.npmjs.com/package/@oruga-ui/theme-bulma"><img src="https://img.shields.io/npm/dt/@oruga-ui/theme-bulma.svg" /></a>
    <a href="https://discord.gg/RuKuBYN"><img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg?logo=discord" /></a>
    <a href="https://ko-fi.com/mlmoravek"><img src="https://img.shields.io/badge/ko--fi-donate-%23FF5E5B?style=flat&logo=ko-fi&logoColor=white" /></a>
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

To use the examples below start by creating a custom sass/scss file like `main.scss` (you can call it anything) and import it instead of `bulma.css` like this:

```js
import { createApp } from 'vue'
import App from './App.vue'

import Oruga from '@oruga-ui/oruga-next'
import { bulmaConfig } from '@oruga-ui/theme-bulma'

import './main.scss'

createApp(App)
    .use(Oruga, bulmaConfig)
    .mount('#app')
```

Inside `main.scss` you need to include Bulma styles and theme styles. You have two options for doing it: **combined** or **separated**. The theme features a combined entrypoint which includes Bulma styles and theme styles. This is best for most customization use cases as it handles some messy variable scope issues. The separated entrypoint only includes theme styles without Bulma. This gives you full control over how you import Bulma and how much of it you import, but you'll have to deal with the messy scope problems mentioned earlier. Unless it's critical you only include part of Bulma the separate method is best avoided.

#### The Combined Method

The combined method is fairly straitforward. Define custom variables and then pass them in using `with()` syntax. You can override any variable in Bulma or the theme which has a `!default` by passing it in this way. 

If you need to add custom color variants with this method you must use the `$theme-bulma-custom-colors` variable.

```scss
// set your color overrides
$primary: #8c67ef;
$red: #f00;
$link: $primary;

// add new colors to the colors map
$theme-bulma-custom-colors: ('tertiary': $red);

// Include the Oruga Bulma theme with Bulma included
@use '@oruga-ui/theme-bulma/dist/scss/bulma-build' with (
    $family-primary: '"Nunito", sans-serif',
    $primary: $primary,
    $link: $link,
    $theme-bulma-custom-colors: $custom-colors,
);

// Then add additional custom code here
// ...
```

#### The Separated Method
When using this method the main thing to be aware of is `$custom-colors`. In the combined method the theme will add Oruga's standard `secondary` color variant for you and you can add additional variants using `$theme-bulma-custom-colors`. Using the separate method you need to do this in your code instead using Bulma's `$custom-colors` var, which will be implicitly passed to the theme behind the scenes. 

```scss
// Assemble color variables
$red: #f00;
$green: #0f0;
$blue: #00f;
$black: #000;
$dark-grey: #6c757d;
$speed-slower: 1000ms;

// Custom colors is required if you want the secondary variant. Nothing will break if you omit it though.
$custom-colors: (
    // Add the standard Oruga secondary variant
    'secondary': $dark-grey,
    // If you want to add additional custom colors add them here
    'tertiary': $red
);

// Pass any Bulma vars you'd like to override here
@use "bulma/sass" with (
    $red: $red,
    $blue: $blue,
    $green: $green,
    $black: $black,
    $primary: $green,
    $custom-colors: $custom-colors,
);

// Pass any theme vars you'd like to override here
@use "@oruga-ui/theme-bulma/dist/scss/component-only-build.scss" with (
    $speed-slower: $speed-slower,
);
```

The other thing to be aware of is when you're importing Bulma. `@use "bulma/sass" with (...)` **MUST** come before all other Bulma usage. This is where the messy scope issues come in. If you reference Bulma beforehand, for example to use a Bulma mixin to create a color to pass into Bulma, you're going to get SASS errors.

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
