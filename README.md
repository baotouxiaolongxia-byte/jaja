# Jada Han 个人作品集网站

当代画家Jada Han（韩佳钰）的专业个人作品集网站。

## 技术栈

- **React 19** - 前端框架
- **Vite** - 构建工具
- **Tailwind CSS** - 样式框架
- **Framer Motion** - 动画库
- **Lucide React** - 图标库

## 功能特性

- ✨ 极简画廊风格设计
- 🌓 暗黑模式切换
- 📱 响应式设计，完美适配手机/平板/电脑
- 🎨 瀑布流作品展示
- 🔍 作品分类筛选
- 📸 作品详情模态框
- 📤 社交媒体分享
- 🚀 图片懒加载
- 📝 联系表单
- 🎭 平滑滚动和交互动画

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
jada-han-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # 导航栏
│   │   ├── Hero.jsx         # 首页Hero区
│   │   ├── Portfolio.jsx    # 作品展区
│   │   ├── About.jsx        # 关于我
│   │   ├── Exhibitions.jsx  # 展览与收藏
│   │   ├── Contact.jsx      # 联系区
│   │   └── Footer.jsx       # 页脚
│   ├── App.jsx              # 主应用组件
│   ├── main.jsx             # 应用入口
│   └── index.css            # 全局样式
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 设计系统

### 配色方案
- **画廊白 (Canvas):** #F7F5F0 - 主背景
- **深黑 (Ink):** #1A1A1A - 暗黑模式
- **墨灰 (Graphite):** #141414 - 主文本
- **银灰 (Silver):** #5A5A5A - 次要文本
- **赭金 (Ochre):** #8C7853 - 强调色
- **灰褐 (Linen):** #E0DCD4 - 分割线

### 字体
- **标题:** Playfair Display
- **正文:** Inter
- **标签:** Space Mono

## 自定义内容

### 修改作品数据

编辑 `src/components/Portfolio.jsx` 中的 `artworks` 数组。

### 修改个人信息

编辑 `src/components/About.jsx` 中的文本内容。

### 修改展览信息

编辑 `src/components/Exhibitions.jsx` 中的 `exhibitions` 数组。

### 修改联系信息

编辑 `src/components/Contact.jsx` 中的联系方式。

## License

MIT
