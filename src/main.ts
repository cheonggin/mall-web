import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible/index.min.js'

import '@/assets/styles/index.css'

createApp(App).use(router).mount('#app')
