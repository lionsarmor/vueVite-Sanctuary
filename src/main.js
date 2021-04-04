import { createApp } from 'vue'
import App from './App.vue'
import x5GMaps from 'x5-gmaps'

Vue.use(x5GMaps, 
{ key: GOOGLE_KEY, libraries: ['places'] }
)
createApp(App).mount('#app')
