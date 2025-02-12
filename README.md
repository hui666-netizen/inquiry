## 环境要求

- Node.js 16.16+ 最新版本
- git

## 技术

- Vue3
- Pinia
- VxeTable
- ElementPlus

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

```
