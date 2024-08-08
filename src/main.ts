import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// Tailwind CSS
import './tailwind/app.css' 
import './style.css'
const app = createApp(App)
app.use(router)
app.use(VueSweetalert2)
app.mount('#app')
