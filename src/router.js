import Vue from "vue";
import VueRouter from "vue-router";
import mainPage from "@/views/mainPage.vue";
import UserApp from "@/views/UserApp.vue";
import memes from "@/views/memes.vue";
import refPage from "@/views/tableList/refPage.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',

        component: mainPage
    },
    {
        path: '/CRUD',
        component: UserApp
    },
    {
        path: '/CRUD/:id/edit',
        component: refPage
    },
    {
        path: '/CRUD/memes',
        component: memes
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})
