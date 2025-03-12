import {
    createRouter,
    createWebHistory,
    type RouteRecordRaw,
} from "vue-router";
import Home from "@/views/Home.vue";
import Component from "@/views/Component.vue";

import components from "@/components";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        alias: "/home",
        name: "Home",
        component: Home,
    },
    ...components.map((component) => ({
        path: "/components/" + component.toLocaleLowerCase(),
        name: component,
        props: { component },
        component: Component,
    })),
];

const router = createRouter({
    history: createWebHistory("/"),
    routes,
});

export default router;
