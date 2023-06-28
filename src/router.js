import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: () => import("./views/home.vue"),
            name: "home"
        },
        {
            path: "/list",
            component: () => import("./views/list.vue"),
            name: "list"
        },
        {
            path: "/list/:id",
            component: () => import("./views/detail.vue"),
            name: "detail"
        },
        {
            path: "/cart",
            component: () => import("./views/cart.vue"),
            name: "cart"
        },
        {
            path: "/user",
            component: () => import("./views/user.vue"),
            name: "user"
        },
        {
            path: "/login",
            component: () => import("./views/login.vue"),
            name: "login"
        },
        {
            path: "/reg",
            component: () => import("./views/reg.vue"),
            name: "reg"
        },
        {
            path: "/user/info",
            component: () => import("./views/info.vue"),
            name: "info"
        }
    ],
});

export default router