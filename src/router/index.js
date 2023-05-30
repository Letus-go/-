import Vue from 'vue'
import VueRouter from 'vue-router'
import homeView from "@/views/home/homeView.vue";
import infoView from "@/views/info-display/infoView.vue";
import hotView from "@/views/hot-analysis/hotView.vue";
import dataView from "@/views/data-v/dataView.vue";
import feelView from "@/views/feelView.vue";
import eventView from "@/views/eventView.vue";
import detailView from "@/views/detail/detailView.vue";


Vue.use(VueRouter)

const routes = [
    //路由重定向
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: '/home',
        component: homeView
    },
    {
        path: '/info-display',
        component: infoView,

    },
    {
        path: '/detail',
        component: detailView
    },
    {
        path: '/event',
        component: eventView
    },
    {
        path: '/felling',
        component: feelView
    },
    {
        path: '/hot-analysis',
        component: hotView
    },
    {
        path: '/data-v',
        component: dataView,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
