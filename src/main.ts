import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import { createOruga, OrugaComponentPlugins } from "@oruga-ui/oruga-next";
import Examples from "@oruga-ui/examples";

// add examples styles
import "@oruga-ui/examples/index.css";
// import main bundle, either separated or combined
// these imports are for testing different ways of including theme/bulma styles
// use one or the other. do not use both.
//import "./main-combined.scss";
import "./main-combined.scss";

// add theme config
import { bulmaConfig } from "./plugins/theme";

const oruga = createOruga(
    {
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
    },
    // add all components globally
    OrugaComponentPlugins,
);

createApp(App).use(router).use(oruga).use(Examples).mount("#app");
