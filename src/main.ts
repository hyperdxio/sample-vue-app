import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import HyperDX from '@hyperdx/browser'

HyperDX.init({
  apiKey: import.meta.env.VITE_HYPERDX_API_KEY,
  service: 'example-vue-app',
  consoleCapture: true, // Capture console logs (default false)
  advancedNetworkCapture: true, // Capture full HTTP request/response headers and bodies (default false)
})

createApp(App).mount('#app')
