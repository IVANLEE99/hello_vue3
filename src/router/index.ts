import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes: [
        {
            name: "home",
            path: "/home",
            component: Home,
        },
        {
            name: "news",
            path: "/news",
            component: News,
        },
        {
            name: "about",
            path: "/about",
            component: About,
        },
    ],
});

export default router;
