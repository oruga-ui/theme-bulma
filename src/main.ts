import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import Oruga from "@oruga-ui/oruga-next";
import Examples from "@oruga-ui/examples";

// add examples styles
import "@oruga-ui/examples/dist/examples.css";
// import main bundle, either separated or combined
// these imports are for testing different ways of including theme/bulma styles
// use one or the other. do not use both.
//import "./main-combined.scss";
import "./main-separated.scss";

// add theme config
import { bulmaConfig } from "./plugins/theme";

createApp(App)
    .use(router)
    .use(Oruga, {
        iconPack: "fas",
        iconComponent: "vue-fontawesome",
        customIconPacks: {
            fas: {
                sizes: {
                    default: "",
                    small: "sm",
                    medium: "lg",
                    large: "xl",
                },
            },
        },
        ...bulmaConfig,
    })
    .use(Examples)
    .mount("#app");
