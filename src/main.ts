import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import Oruga from "@oruga-ui/oruga-next";
import Examples from "@oruga-ui/examples";

// add examples styles
import "@oruga-ui/examples/dist/examples.css";
// import main bundle, either separated or combined
// this import's primary purpose is to import styles for use in the main css bundle (dist/bulma.css). it can also be used for testing the separate build locally for testing purposes. do to this just swap the main-combined import for main-separated. PLEASE NOTE you MUST switch this back before your merge, otherwise the docs will break.
import "./main-combined.scss";
//import "./main-separated.scss";

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
