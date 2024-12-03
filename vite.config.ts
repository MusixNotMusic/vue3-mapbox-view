import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssPresetEnv from "postcss-preset-env";
import pkg from './package.json'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    emptyOutDir: false, // 避免dist被清空
    lib: {
      entry: path.resolve(__dirname, 'packages/index.js'),
      name: pkg.name,
      fileName: (format) => `${pkg.name}.${format}.js`,
    },
    rollupOptions: {
      // 把不想打包进你的包的包排除掉
      external: [
        "vue", "mapbox-gl",
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "vue"
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
    postcss: {
      plugins: [postcssPresetEnv()],
    }
  }
})
