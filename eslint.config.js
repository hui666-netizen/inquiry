import sjzyEslint from '@sjzy/eslint-config'

const eslintConfig = await sjzyEslint()
export default [
  ...eslintConfig,
  {
    ignores: [
      '/api/**/*.ts',
      'node_modules',
      '**/node_modules/**',
      'src/assets',
      'src/assets/*',
      'src/icons',
      'src/icons/**',
      '*/src/api/*',
      'src/api/**/*',
      'mock',
      '**/mock/**',
      'demo.css',
      '**/demo.css/**',
      'iconfont.js',
      'iconfont.css',
      '**/iconfont/**',
      'public',
      '**/public/**',
      'dist',
      '**/dist/**',
    ],
  },
]
