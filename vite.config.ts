import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url";
import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    // 配置文件扩展名
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  css:{
    preprocessorOptions:{
      less:{
        modifyVars:{
          hock: `true; @import (reference) "${resolve('src/style/index.less')}";`,
        },
        javascriptEnabled: true,
      }
    }
  },
})
