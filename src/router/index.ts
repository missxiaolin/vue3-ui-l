import { createWebHashHistory, createRouter } from 'vue-router'
import Index from '../view/index/index.vue'
import Swish from '../view/swish/index.vue'
import Button from '../view/button/index.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/swish',
            component: Swish
        },
        {
            path: '/button',
            component: Button
        }
    ]
})

export default router