import postcssImport from 'postcss-import'

// 处理CSS中的 @import 规则
import postcssUrl from 'postcss-url'

// 处理和转换 CSS文 件中的 URL
import postcssPresetEnv from 'postcss-preset-env'

// 允许在 CSS 中使用嵌套规则
// import postcssNesting from 'postcss-nesting'

export default () => {
  return {
    plugins: [
      postcssImport(),
      postcssUrl(),
      postcssPresetEnv({
        browsers: ['> 0.2% and not dead'],
        features: {
          'nesting-rules': [
            'auto',
            {
              edition: '2024-02',
            },
          ],
        },
      }),
      // postcssNesting({
      //   edition: '2024-02',
      // }),
      // 自定义 postcss 插件 处理第三方包css前缀警告
      {
        // 插件名称
        postcssPlugin: 'charset-removal',
        // 获取 @ 规则
        AtRule: {
          // 处理全部 @charset 规则
          charset: (atRule) => {
            // 移除规则
            atRule.remove()
          },
        },
      },
    ],
  }
}
