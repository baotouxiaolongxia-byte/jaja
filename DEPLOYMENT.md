# 部署到 Vercel 指南

本文档将指导您将 Jada Han 作品集网站部署到 Vercel。

## 方式一：使用 Vercel Dashboard（推荐）

### 前置准备

1. 确保您已安装 [Git](https://git-scm.com/)
2. 拥有 [GitHub](https://github.com/)、[GitLab](https://gitlab.com/) 或 [Bitbucket](https://bitbucket.org/) 账号
3. 拥有 [Vercel](https://vercel.com/) 账号

### 步骤 1：初始化 Git 仓库

在项目根目录执行：

```bash
git init
git add .
git commit -m "Initial commit: Jada Han Portfolio"
```

### 步骤 2：创建远程仓库

1. 在 GitHub/GitLab/Bitbucket 上创建新的仓库
2. 按照提示将本地仓库推送到远程：

```bash
git remote add origin <您的仓库地址>
git branch -M main
git push -u origin main
```

### 步骤 3：导入到 Vercel

1. 访问 [vercel.com/new](https://vercel.com/new)
2. 登录您的 Vercel 账号
3. 点击 "Import" 导入您刚创建的仓库
4. 配置项目设置（Vercel 会自动检测到 Vite 项目）：
   - **Project Name:** `jada-han-portfolio`（或您喜欢的名字）
   - **Framework Preset:** Vite（会自动检测）
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`（自动填充）
   - **Output Directory:** `dist`（自动填充）
5. 点击 "Deploy" 开始部署

### 步骤 4：完成！

部署完成后，您将获得：
- ✅ 自动生成的 `.vercel.app` 域名
- ✅ 自动配置的 HTTPS
- ✅ 全球 CDN 加速
- ✅ 自动持续部署（每次推送代码自动重新部署）

---

## 方式二：使用 Vercel CLI

### 安装 Vercel CLI

```bash
npm i -g vercel
```

### 登录 Vercel

```bash
vercel login
```

### 部署项目

在项目根目录执行：

```bash
vercel
```

按照提示操作：
- Set up and deploy? `Yes`
- Which scope? 选择您的账号
- Link to existing project? `No`
- What's your project's name? `jada-han-portfolio`
- In which directory is your code located? `./`
- Want to modify these settings? `No`

### 部署到生产环境

```bash
vercel --prod
```

---

## Vercel 自动配置的功能

✅ **HTTPS** - 自动启用，无需额外配置  
✅ **全球 CDN** - Vercel Edge Network 自动加速  
✅ **自动部署** - 推送到 main 分支自动重新部署  
✅ **自定义域名** - 可在 Vercel Dashboard 中添加您的域名  
✅ **预览部署** - 每个 Pull Request 都会生成预览链接  

---

## 配置自定义域名

1. 在 Vercel Dashboard 中进入您的项目
2. 进入 "Settings" → "Domains"
3. 输入您的域名（例如 `jadahan.com`）
4. 按照提示配置 DNS 记录
5. Vercel 会自动为您的域名签发 SSL 证书

---

## 环境变量（如需要）

如果您需要添加环境变量：

1. 进入项目 Settings → Environment Variables
2. 添加变量（注意：Vite 环境变量需要以 `VITE_` 开头）
3. 重新部署项目

---

## 故障排除

### 构建失败

确保：
- `package.json` 中的 `build` 脚本正确
- 所有依赖都已在 `package.json` 中声明
- Node 版本兼容性（Vercel 默认使用最新 LTS）

### 路由问题

`vercel.json` 中的 `rewrites` 配置已确保单页应用路由正常工作。

---

## 部署检查清单

- [ ] 项目已推送到 Git 仓库
- [ ] 在 Vercel 中导入项目
- [ ] 首次部署成功
- [ ] 测试所有页面功能正常
- [ ] 配置自定义域名（可选）
- [ ] 开启自动部署（默认已开启）

需要帮助？访问 [Vercel 文档](https://vercel.com/docs)
