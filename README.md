# 世纪众干线询价系统

## 环境要求

- Node.js 16.16+ 最新版本
- git

## 技术

- Vue3
- Pinia
- VxeTable
- ElementPlus
- NaiveUi

## 包管理

- pnpm

## 使用说明

### 安装依赖

```bash
- pnpm config set registry http://192.168.80.104:4873/

pnpm install
```

### 开发环境

```bash
pnpm run dev
```

### 打包

```bash
# 正式
npm run build

# TS检测
npm run typecheck
```

## 其它

```bash
# 生成api接口
npm run openapi
需要先在openapi/index.js配置

# 静态资源分析
npm run report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix

# 单元测试
npm run test

# e2e 测试
npm run test:e2e
```

## 常见问题

- 地址 <https://gotofreight.feishu.cn/wiki/wikcn7qXBYquA8Aw9J6mEUbrmsc>

测试版本02

### 项目中单独的登录

> .env 文件里 VITE_LOGIN_URL 这个设置为空就不会跳转到登录页面 在 PageLogin 里面自行修改样式

- 1、设置登录路由  在constantRoutes.ts里添加

```
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/PageLogin/index.vue'),
    meta: {
      hidden: true,
      title: '登录',
      tabHidden: true,
    },
  }
```

- 2、复制PageLogin到项目中
- 3、修改src\store\modules\user\index.ts, src\router\guard\permission.ts的判断

```
if (globSetting.loginUrl) {
  window.location.href = `${globSetting.loginUrl}/login?replaceUrl=${window.origin}/slogin`
}
else {
  router.push({
    name: 'Login',
  })
}
```

- 4、修改.env文件 VITE_LOGIN_URL 设置为空
- 5、修改PageLogin里面的样式
- 6、src\config\setting.config.ts routesWhiteList这个字段添加 '/login' 路由
