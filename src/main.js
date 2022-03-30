import { createApp } from 'vue'
import App from './App.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import Index from './view/index/index.vue'


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

const app = createApp(App)

app.use(router)

app.mount('#app')
