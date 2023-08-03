import { createApp } from 'vue'
import App from './App.vue'
import router from './modules/estudiante/router/router'
import "./css/formulario.css"
createApp(App).use(router).mount('#app')