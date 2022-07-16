import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/sass/base.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App)

app.use(createPinia())
app.use(router)
const route = 'https://localhost/8000'


app.mount('#app')
