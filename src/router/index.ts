import { createWebHashHistory, createRouter } from 'vue-router'
import Index from '../view/index/index.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: Index
        },
    ]
})

export default router