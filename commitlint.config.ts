import type { UserConfig } from '@commitlint/types'

const Configuration: UserConfig = {
  ignores: [commit => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 200],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新增功能
        'fix', // bug 修复
        'perf', // 性能优化
        'style', // 样式变动
        'docs', // 文档更新
        'test', // 单元测试
        'refactor', // 重构代码(既没有新增功能，也没有修复 bug)
        'build', // 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
        'ci', // 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
        'chore', // 不属于以上类型的其他类型(日常事务)
        'revert', // 回滚某个更早之前的提交
        'wip',
        'workflow',
        'types',
        'release',
      ],
    ],
  },
}
module.exports = Configuration
