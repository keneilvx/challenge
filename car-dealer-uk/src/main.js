import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/sass/base.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faStar);
createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");

const app = createApp(App)
app.use(createPinia())
app.use(router)
const route = 'https://localhost/8000'


app.mount('#app')
