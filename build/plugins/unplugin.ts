import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VueHooksPlusResolver } from '@vue-hooks-plus/resolvers'

export default function unplugin(viteEnv: ImportMetaEnv, command?: CommandType) {
  return [
    AutoImport({
      resolvers: [VueHooksPlusResolver()],
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'pinia',
        '@vueuse/head',
        '@vueuse/core',
        {
          'driver.js': [
            'driver', // import { useMouse } from '@vueuse/core',
          ],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/store'],
      vueTemplate: true,
      eslintrc:
        command === 'serve'
          ? {
              enabled: true,
            }
          : undefined,
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
      dirs: ['src/components', 'src/layouts/components'],
      resolvers: [],
      // directoryAsNamespace: true,
    }),
  ]
}
