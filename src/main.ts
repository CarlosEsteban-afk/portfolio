import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { createI18n } from 'vue-i18n'
import en from './locale/en.json'
import es from './locale/es.json'

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'es',
  messages: { en, es },
})

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
