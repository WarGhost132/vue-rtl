import { createApp } from 'vue'
import '@/assets/styles/style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router.ts'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
