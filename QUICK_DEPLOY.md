# 🚀 超快速部署指南（10分钟获得网址）

## 最推荐方案：GitHub Pages（免费！）

### 第 1 步：创建 GitHub 账号
如果您还没有账号，注册一个：https://github.com/

### 第 2 步：创建新仓库
1. 登录 GitHub
2. 点击右上角的 "+" → "New repository"
3. 仓库名称填：`jada-han-portfolio`
4. 选择 "Public"
5. **不要**勾选 "Initialize this repository"
6. 点击 "Create repository"

### 第 3 步：上传代码

在您的电脑上，打开 PowerShell 或命令提示符，进入项目目录：

```bash
cd "e:\韩佳钰主页\Jada han"
```

然后执行（替换 `<您的GitHub用户名>`）：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<您的GitHub用户名>/jada-han-portfolio.git
git push -u origin main
```

### 第 4 步：启用 GitHub Pages

1. 进入您的 GitHub 仓库
2. 点击 "Settings"（设置）
3. 左侧菜单找到 "Pages"
4. 在 "Build and deployment" 下：
   - Source: 选择 "GitHub Actions"
5. 完成！

### 第 5 步：获得您的网址！

1-2 分钟后，刷新 Pages 页面，您将看到：
> Your site is live at https://<您的GitHub用户名>.github.io/jada-han-portfolio/

---

## 备选方案：Vercel（更简单）

1. 将代码推送到 GitHub（同上第 1-3 步）
2. 访问 https://vercel.com/new
3. 导入您的仓库
4. 点击 "Deploy"
5. 完成！获得类似 `https://jada-han-portfolio.vercel.app` 的网址

---

## 想先看看效果？本地预览

1. 下载安装 Node.js：https://nodejs.org/
2. 在项目目录执行：
   ```bash
   npm install
   npm run dev
   ```
3. 打开浏览器访问 http://localhost:3000

---

## 需要帮助？

按照以上任一方案操作，您很快就会有一个可以分享给别人的网址了！
