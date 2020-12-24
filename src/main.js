import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from './extends/element'

import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/lib/theme-chalk/display.css'
import '@/assets/style/main.scss'

import SvgIcon from './extends/icon'

const app = createApp(App);

app.use(store)
app.use(router)

Object.keys(element).forEach(key => {
  app.use(element[key]);
});
app.component('svg-icon', SvgIcon)

app.mount('#app')