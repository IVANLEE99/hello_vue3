import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import Detail from "@/pages/Detail.vue";
import { createLanguageService } from "typescript";
const router = createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(),
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
            children: [
                {
                    name: "myDetail",
                    path: "detail/:id/:name/:content",
                    component: Detail,
                    // props的布尔值写法，作用：把收到了每一组params参数，作为props传给Detail组件
                    props: true,
                    // props的对象写法，作用：把对象中的每一组key-value作为props传给Detail组件
                    // props: { a: 1, b: 2, c: 3 },
                    // props的函数写法，作用：把返回的对象中每一组key-value作为props传给Detail组件
                    // props(route) {
                    //     console.log('route', route.query);
                    //     return route.query
                    // }

                },
                {
                    name: "detail",
                    path: "detail",
                    component: Detail,
                    // props的函数写法，作用：把返回的对象中每一组key-value作为props传给Detail组件
                    props(route) {
                        console.log('route', route.query);
                        return route.query
                    }
                },
            ],
        },
        {
            name: "about",
            path: "/about",
            component: About,
        },
    ],
});

export default router;
