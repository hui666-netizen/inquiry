import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import unocss from '@unocss/vite'
import { compression } from 'vite-plugin-compression2'
// import VueDevTools from 'vite-plugin-vue-devtools'
import { CodeInspectorPlugin } from 'code-inspector-plugin'
import unplugin from './unplugin'
import visualizer from './visualizer'
import mkcert from './mkcert'
import createHtml from './createHtml'

/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(
  viteEnv: ImportMetaEnv,
  command?: CommandType,
): (PluginOption | PluginOption[])[] {
  const plugins = [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('micro-app'),
        },
      },
    }),
    vueJsx(),
    ...unplugin(viteEnv, command),
    unocss(),
    createHtml(),
    compression(),
    // VueDevTools(),
    CodeInspectorPlugin({ bundler: 'vite' }),
  ]

  if (command === 'serve')
    plugins.push(mkcert)
  else viteEnv.VITE_REPORT === 'true' && plugins.push(visualizer)

  return plugins
}
