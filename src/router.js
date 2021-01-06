import Vue from 'vue';
import VueRouter from "vue-router";
import Home from '@/views/Home'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: ()=>import('./views/Todos.vue')
        },
        {
            path: '*',
            component: ()=>import('./views/Error.vue')
        }
    ]
})




