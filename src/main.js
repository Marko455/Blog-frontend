import { createApp } from 'vue'
import App from './App.vue'
import {Vuetify} from 'vue'
import {createVuetify} from 'vuetify'
import router from './router'

createApp(App).use(router).mount('#app')
Vue.use(createVuetify);