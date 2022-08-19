import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'

import 'amfe-flexible'

import { Button, Tabbar, TabbarItem, NavBar, Card } from 'vant'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button).use(Tabbar).use(TabbarItem).use(NavBar).use(Card)

app.mount('#app')
