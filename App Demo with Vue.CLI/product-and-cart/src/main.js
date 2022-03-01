import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Neste caso estou englomando para todo o projeot este css main
import './assets/styles/style.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
