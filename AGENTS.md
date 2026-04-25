# AGENTS.md

## 仓库概述 (What this repo is)
- 这是一个基于 Beautiful Jekyll 主题 (`beautiful-jekyll-theme` gemspec 版本 `6.0.1`) 构建的个人网站。
- 使用 Ruby/Jekyll 技术栈，**不是** Node.js/NPM 工具链。
- `opencode.json` 仅用于启用 `superpowers` 插件；该文件已被 git 忽略 (`.gitignore`)，因此不要指望对其修改会持久保存。

## 规范验证命令 (Canonical verification commands)
- 必须严格遵循 CI 构建顺序（来自 `.github/workflows/ci.yml`）：
  1. `bundle install`
  2. `bundle exec appraisal install`
  3. `bundle exec appraisal jekyll build --future --config _config_ci.yml,_config.yml`
- **注意**：CI 会在运行时动态创建 `_config_ci.yml` 用于配置 `baseurl`。如果需要在本地复现完整的 CI 构建流程，请务必先手动创建该文件。
- **本地开发**：一般可以使用 `bundle exec jekyll serve` 在本地预览网站更改，这会自动监视文件变化并重新构建。

## 核心文件导航 (High-value file map)
- `_config.yml`: 全站的首要配置文件（导航栏 navbar、社交链接、网站颜色、使用的插件、排除的文件夹等）。
- `index.html`: 主页的入口文件（必须设置 `layout: home`）。
- `_layouts/home.html`: 负责渲染文章列表流（处理分页、文章摘要、缩略图和标签）。
- `_layouts/base.html`: 全局页面的最外层框架；主要负责引入共享的 CSS/JS 和包含头部/尾部组件。
- `_includes/head.html`: SEO 和 Meta 标签；处理 CSS 加载顺序（如 `site-css`, `page.css`, 以及外部 CSS）。
- `_includes/footer-scripts.html`: 处理 JS 的加载流（`site-js`, `page.js`, 外部 JS）。
- `aboutme.md`: 本站的一个自定义内容页面示例。

## 开发规范与避坑指南 (Repo-specific gotchas)
- **YAML Front Matter (文件头)**：网站的所有自定义页面和博客文章顶部都**必须**保留 YAML Front Matter（即包裹在 `---` 之间的配置块）。如果移除它，Jekyll 将不会应用任何页面布局和样式。
- **文章写作规范**：新的博客文章必须放在 `_posts/` 目录下，文件命名必须严格遵循 `YYYY-MM-DD-title.md` 的格式。
- **不被发布的目录**：`_config.yml` 配置了从生产环境输出中排除 `docs/` 目录，因此**不要**把需要发布的公开页面存放在该目录下。
- **构建输出目录**：所有构建产物都会输出到 `_site/` 目录，且该目录已被 `.gitignore` 忽略。**永远不要手动修改 `_site/` 目录下的任何内容**。
- **代码验证方式**：本项目没有像 ESLint/Prettier/Typecheck 那样的代码检查管道。在这里，**Ruby/Jekyll 构建成功**就是最重要的验证方式。
