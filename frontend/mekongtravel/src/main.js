import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import HomePage from './views/homepage/homepage.vue'

createApp(App).use(router).mount('#app')
createApp(HomePage).use(router).mount('#homepage')