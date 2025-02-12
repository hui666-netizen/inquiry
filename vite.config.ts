import process from 'node:process'
import { URL, fileURLToPath } from 'node:url'
import externalGlobals from 'rollup-plugin-external-globals'
import type { Plugin } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import { createViteProxy, setupViteDefine, setupVitePlugins } from './build'
import globConfig from './src/config/index'

export default defineConfig(({ mode, command }) => {
  const viteEnv: ImportMetaEnv = loadEnv(mode, process.cwd()) as any
  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      },
    },
    define: setupViteDefine(viteEnv, command),
    plugins: setupVitePlugins(viteEnv, command),
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/scss/elementvar.scss" as *;',
        },
      },
    },
    server: {
      port: globConfig.devPort,
      host: true,
      proxy: command === 'serve' ? createViteProxy() : undefined,
    },
    optimizeDeps: {
      include: ['echarts', '@antv/g6'],
    },
    esbuild: {
      drop: mode === 'prod' ? ['console', 'debugger'] : [],
    },
    build: {
      chunkSizeWarningLimit: 1000,
      outDir: globConfig.outputDir,
      reportCompressedSize: false,
      sourcemap: true,
      commonjsOptions: {
        ignoreTryCatch: false,
      },
      rollupOptions: {
        external: ['@antv/g6', 'echarts'],
        plugins: [
          externalGlobals({
            '@antv/g6': 'G6',
            'echarts': 'echarts',
          }) as Plugin,
        ],
        output: {
          manualChunks: {
            'lodash-es': ['lodash-es'],
            'vxe-table': ['vxe-table'],
            'xe-utils': ['xe-utils'],
            'element-plus': ['element-plus'],
            'sjzyUi': ['@sjzy/ui'],
            'vue-i18n': ['vue-i18n'],
            'sjzyEditor': ['@sjzy/editor'],
          },
        },
      },
    },
  }
})
