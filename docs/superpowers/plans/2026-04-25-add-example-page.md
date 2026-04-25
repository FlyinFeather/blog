# 添加带导航栏链接的示例页面实施计划

> **对于代理工作者：必需的子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 来逐任务实施此计划。步骤使用复选框（`- [ ]`）语法进行跟踪。**

**目标：** 在网站根目录创建 `example.md` 页面并在导航栏中添加指向它的链接。

**架构：** 该计划涉及创建一个带有适当YAML前置内容的简单Markdown页面，并通过修改 `_config.yml` 中的 `navbar-links` 部分添加导航链接。此方法遵循现有的模式，并且不需要修改布局或包含文件。

**技术栈：** Jekyll（Ruby），Markdown，YAML

---

### 任务 1：创建示例页面文件

**文件：**
- 创建：`example.md`

- [ ] **步骤 1：写入带有YAML前置内容的文件内容**

```markdown
---
layout: page
title: 示例页面
subtitle: 这是一个演示拉取请求流程的示例页面
---

# 示例页面

这是一个示例页面，用于演示使用 `gh` CLI 的拉取请求流程。

## 目的
展示如何：
1. 创建一个新文件。
2. 在功能分支上提交和推送它。
3. 通过命令行打开拉取请求。
```

- [ ] **步骤 2：验证文件已创建**

运行：`ls example.md`
预期：`example.md` 应该存在

- [ ] **步骤 3：提交更改**

```bash
git add example.md
git commit -m "feat: 添加示例页面"
```

### 任务 2：更新导航栏链接

**文件：**
- 修改：`_config.yml:22-28`（navbar-links 部分）

- [ ] **步骤 1：在 navbar-links 下添加新链接项**

在 `_config.yml` 中的 `navbar-links:` 部分添加：
```yaml
  示例页面: "example"
```

- [ ] **步骤 2：验证修改**

运行：`grep -A 5 "navbar-links:" _config.yml`
预期：应该显示新添加的 "示例页面: "example"" 条目

- [ ] **步骤 3：提交更改**

```bash
git add _config.yml
git commit -m "feat: 在导航栏中添加示例页面链接"
```

### 任务 3：验证实施

**文件：**
- 测试：在本地构建网站

- [ ] **步骤 1：本地构建网站**

运行：`bundle exec jekyll serve`
预期：Jekyll 应该成功启动而没有错误

- [ ] **步骤 2：检查生成的页面**

验证：
- `https://localhost:4000/example/` 应该显示示例页面内容
- 导航栏应该包含指向 "示例页面" 的链接

- [ ] **步骤 3：提交验证（如果成功）**

```bash
# 注意：这一步是可选的，仅在验证成功后执行
git commit --allow-empty -m "test: 验证示例页面功能正常"
```

**计划自查：**
1. **规格覆盖：** 计划中的每个步骤都直接解决了创建示例页面并在导航栏中添加链接的目标。
2. **占位符扫描：** 计划不包含任何 "TBD"、"TODO" 或占位符语言 - 每个步骤都有具体的操作和预期结果。
3. **类型一致性：** 文件路径、命令和预期输出在所有任务中保持一致。