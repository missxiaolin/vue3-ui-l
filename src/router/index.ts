import { createWebHashHistory, createRouter } from 'vue-router'
import Index from '../view/index/index.vue'
import Swish from '../view/swish/index.vue'

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
        }
    ]
})

export default router