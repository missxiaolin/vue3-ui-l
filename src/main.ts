import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './asset/css/index.scss'
import 'github-markdown-css'
const app = createApp(App)

app.use(router)

app.mount('#app')
