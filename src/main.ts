import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import Oruga from '@oruga-ui/oruga-next'
import { bulmaConfig } from './plugins/oruga'

import './assets/scss/plugin.scss'

import '@fortawesome/fontawesome-free/scss/fontawesome.scss'
import '@fortawesome/fontawesome-free/scss/regular.scss'
import '@fortawesome/fontawesome-free/scss/solid.scss'

import Steps from './components/Steps.vue'


createApp(App)
    .use(router)
    .use(Oruga, {
        customIconPacks: {
            fas: {
                sizes: {
                    default: '',
                    small: 'fa-sm',
                    medium: 'fa-lg',
                    large: 'fa-2x'
                }
            }
        },
        iconPack: 'fas',
        ...bulmaConfig
    })
    .component('steps', Steps)
    .mount('#app')
