# Navbar Home Icon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a FontAwesome home icon to the left of the "Home" text in the navigation bar.

**Architecture:** Modify the navigation template to include an `<i>` tag with FontAwesome classes inside the navbar brand link.

**Tech Stack:** Jekyll, Liquid, FontAwesome (already included in theme).

---

### Task 1: Add Home Icon to Navbar

**Files:**
- Modify: `_includes/nav.html`

- [ ] **Step 1: Locate and modify the navbar-brand link**

In `_includes/nav.html`, find the line that renders `{{ site.title }}` and add the FontAwesome icon.

```html
<<<<
    <a class="navbar-brand" href="{{ '/' | absolute_url }}">{{ site.title }}</a>
====
    <a class="navbar-brand" href="{{ '/' | absolute_url }}"><i class="fas fa-home" aria-hidden="true"></i> {{ site.title }}</a>
>>>>
```

- [ ] **Step 2: Commit the change**

```bash
git add _includes/nav.html
git commit -m "feat: add home icon to navbar title"
```
