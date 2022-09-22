import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/index',
        name: 'index',
        component: () => import('../views/vue-router的用法.vue'),
        children: [
            {
                path: 'user/:id',  // 直接占位符
                name: 'user',
                component: () => import('../components/user.vue')
            },
            {
                path: 'manager',
                name: 'manager',
                component: () => import('../components/manager.vue')
            }
        ]
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../components/home.vue')
    },
    {
        path: '/count',
        name: 'count',
        component: () => import('../components/count.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router