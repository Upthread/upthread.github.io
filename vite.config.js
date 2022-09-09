<<<<<<< HEAD
//reference https://learnvue.co/tutorials/deploy-vue-to-github-pages
=======
>>>>>>> df13b6ccea9db4195fe289d3222a1c864ed2b29a
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
<<<<<<< HEAD
    },
    base: process.env.NODE_ENV === "production" ? "/upthread.github.io/" : "/"
=======
    }
>>>>>>> df13b6ccea9db4195fe289d3222a1c864ed2b29a
  }
})
