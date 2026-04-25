# Homepage and Blog Separation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Separate the root homepage (welcome page) from the blog post list (moved to `/blog/`) in a Beautiful Jekyll site.

**Architecture:** Change the root `index.html` to a standard page layout, create a new `/blog/index.html` with the home layout to list posts, and update Jekyll pagination configuration in `_config.yml` to support the new blog path.

**Tech Stack:** Jekyll, Beautiful Jekyll Theme, Markdown, HTML, YAML.

---

### Task 1: Update Jekyll Configuration for Pagination

**Files:**
- Modify: `_config.yml`

- [ ] **Step 1: Add pagination path configuration**

In `_config.yml`, add the `paginate_path` setting under the `paginate: 5` line to instruct Jekyll's paginator to generate pages under the `/blog/` directory.

```yaml
paginate: 5
paginate_path: "/blog/page:num/"
```

- [ ] **Step 2: Commit the configuration change**

```bash
git add _config.yml
git commit -m "chore: update jekyll paginate_path to support /blog/ directory"
```

---

### Task 2: Create the Blog Index Page

**Files:**
- Create: `blog/index.html`

- [ ] **Step 1: Create the blog directory**

```bash
mkdir blog
```

- [ ] **Step 2: Create `blog/index.html` with the home layout**

Create `blog/index.html` with the following content to take over the post listing responsibility:

```html
---
layout: home
title: Blog
subtitle: Welcome to my blog
---
```

- [ ] **Step 3: Commit the new blog page**

```bash
git add blog/index.html
git commit -m "feat: create dedicated blog index page"
```

---

### Task 3: Refactor the Homepage

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Change layout and clear blog variables from root `index.html`**

Modify `index.html` to use the `page` layout instead of `home`. Keep the Hitokoto JS inclusion for the dynamic subtitle.

```html
---
layout: page
title: 欢迎访问我的主页
subtitle: Loading...
js:
  - "/assets/js/hitokoto.js"
  - "/assets/js/health_check.js"
---

<!-- 个人介绍可以写在这里 -->
```

- [ ] **Step 2: Commit the homepage refactor**

```bash
git add index.html
git commit -m "refactor: convert homepage to a standard page without post listings"
```

---

### Task 4: Verify the Build

**Files:**
- None (Build process only)

- [ ] **Step 1: Run the CI build command locally**

```bash
bundle exec appraisal jekyll build --future --config _config_ci.yml,_config.yml
```
Expected: The build completes successfully without errors.

- [ ] **Step 2: Verify the output structure**

```bash
ls -la _site/blog/index.html
```
Expected: The file exists, confirming the blog index was generated.