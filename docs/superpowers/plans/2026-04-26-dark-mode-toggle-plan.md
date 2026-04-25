# Dark Mode Toggle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a minimalist dark mode toggle in the navigation bar with smooth SVG morphing animation and state persistence.

**Architecture:** 
1. **CSS Variables & Animation:** Define `.dark-mode` class in a new CSS file with color variables and the SVG animation logic using `clip-path` and `transition`.
2. **HTML Structure:** Inject an inline SVG button into the existing `_includes/nav.html`.
3. **JavaScript Logic:** Create a script to handle toggle clicks, manage `localStorage` for persistence, and check `prefers-color-scheme` for initial state. The script will be added to `_includes/head.html` to prevent FOUC (Flash of Unstyled Content).

**Tech Stack:** HTML (Jekyll includes), CSS (Variables, Transitions, SVG styling), Vanilla JavaScript.

---

### Task 1: Setup Dark Mode CSS and Variables

**Files:**
- Create: `assets/css/dark-mode.css`
- Modify: `_includes/head.html`

- [ ] **Step 1: Create the CSS file with variables and transition styles**
Write the base dark mode variables and the smooth transition effect to `assets/css/dark-mode.css`.

```css
/* assets/css/dark-mode.css */

/* Enable smooth transitions for theme switching */
body, .navbar, .navbar-default, .footer, .well, .post-preview, .card {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

/* Dark Mode Variables */
body.dark-mode {
  --bg-color: #121212;
  --text-color: #e0e0e0;
  --link-color: #4da6ff;
  --hover-color: #80c1ff;
  --navbar-bg: #1e1e1e;
  --navbar-text: #e0e0e0;
  --navbar-border: #333333;
  --footer-bg: #1e1e1e;
  --footer-text: #a0a0a0;
  --code-bg: #2d2d2d;
}

/* Apply Variables */
body.dark-mode {
  background-color: var(--bg-color);
  color: var(--text-color);
}

body.dark-mode a {
  color: var(--link-color);
}

body.dark-mode a:hover, body.dark-mode a:focus {
  color: var(--hover-color);
}

body.dark-mode .navbar, body.dark-mode .navbar-default {
  background-color: var(--navbar-bg);
  border-color: var(--navbar-border);
}

body.dark-mode .navbar-default .navbar-nav > li > a,
body.dark-mode .navbar-default .navbar-brand {
  color: var(--navbar-text);
}

body.dark-mode .navbar-default .navbar-nav > li > a:hover,
body.dark-mode .navbar-default .navbar-brand:hover {
  color: var(--hover-color);
}

body.dark-mode footer {
  background-color: var(--footer-bg);
  color: var(--footer-text);
}

body.dark-mode footer a {
  color: var(--text-color);
}

body.dark-mode footer a:hover {
  color: var(--hover-color);
}

/* Code blocks adaptation */
body.dark-mode pre, body.dark-mode code, body.dark-mode .highlight {
  background-color: var(--code-bg);
  border-color: var(--navbar-border);
}
```

- [ ] **Step 2: Link the new CSS file in the head**
Modify `_includes/head.html` to include the new CSS file. Add it just before the closing `</head>` tag or after other CSS links.
*(Note: Use sed/awk or manual edit to insert `<link rel="stylesheet" href="{{ '/assets/css/dark-mode.css' | absolute_url }}">`)*

- [ ] **Step 3: Commit CSS setup**

```bash
git add assets/css/dark-mode.css _includes/head.html
git commit -m "feat: add dark mode css variables and styles"
```

---

### Task 2: Implement SVG Toggle Button UI and Animation

**Files:**
- Modify: `_includes/nav.html`
- Modify: `assets/css/dark-mode.css`

- [ ] **Step 1: Add SVG toggle button to navbar**
Inject the toggle button into `_includes/nav.html`. Place it inside the `navbar-collapse` div, likely as a new `<li>` in the `navbar-nav navbar-right` list.

*Insert this structure into `_includes/nav.html` (adjusting placement within the existing `<ul>`):*
```html
<li class="nav-item">
  <button id="dark-mode-toggle" aria-label="Toggle Dark Mode" title="Toggle Dark Mode">
    <svg class="theme-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <mask id="moon-mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <circle cx="24" cy="10" r="6" fill="black" class="moon-cutout" />
      </mask>
      <circle class="sun-core" cx="12" cy="12" r="5" mask="url(#moon-mask)" />
      <g class="sun-rays">
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
    </svg>
  </button>
</li>
```

- [ ] **Step 2: Add SVG animation CSS**
Append the animation logic to `assets/css/dark-mode.css`.

```css
/* assets/css/dark-mode.css (append) */

/* Toggle Button Styling */
#dark-mode-toggle {
  background: transparent;
  border: none;
  padding: 10px 15px; /* Match navbar link padding */
  color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
}

#dark-mode-toggle:hover {
  color: #0085A1; /* match existing hover color */
}

body.dark-mode #dark-mode-toggle:hover {
  color: var(--hover-color);
}

.theme-icon {
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Sun to Moon Animation */
.sun-core {
  transition: r 0.3s ease;
}

.sun-rays {
  transition: opacity 0.3s ease, transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform-origin: center;
}

.moon-cutout {
  transition: cx 0.3s ease, cy 0.3s ease, r 0.3s ease;
  cx: 24; /* Starts outside the sun */
  cy: 10;
  r: 6;
}

/* Dark Mode State for Icon */
body.dark-mode .theme-icon {
  transform: rotate(-25deg); /* Slight tilt for the moon */
}

body.dark-mode .sun-core {
  r: 9; /* Enlarge core to form moon body */
}

body.dark-mode .sun-rays {
  opacity: 0;
  transform: rotate(45deg); /* Spin out while fading */
}

body.dark-mode .moon-cutout {
  cx: 15; /* Move mask in to cut the moon shape */
  cy: 9;
  r: 8;
}

/* Responsive adjustment */
@media only screen and (max-width: 767px) {
  #dark-mode-toggle {
    padding: 10px; /* Adjust padding for mobile menu */
  }
}
```

- [ ] **Step 3: Commit UI setup**

```bash
git add assets/css/dark-mode.css _includes/nav.html
git commit -m "feat: add animated svg toggle button to navbar"
```

---

### Task 3: Implement JavaScript Logic and FOUC Prevention

**Files:**
- Create: `assets/js/dark-mode.js`
- Modify: `_includes/head.html`
- Modify: `_includes/footer-scripts.html` (or wherever JS is loaded)

- [ ] **Step 1: Create the FOUC prevention script (Inline in Head)**
To prevent the screen flashing white before turning dark, we must execute a small script in `<head>` BEFORE the body renders.
Modify `_includes/head.html` to add this script just before `</head>`.

```html
<!-- Insert into _includes/head.html -->
<script>
  // Execute immediately to prevent FOUC (Flash of Unstyled Content)
  (function() {
    try {
      var savedTheme = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark-mode-pre-body'); // Temporary class for body styling if needed
        // We can't access document.body here yet, so we use documentElement
      }
    } catch (e) {}
  })();
</script>
<style>
  /* Ensure background matches immediately if dark mode is active */
  html.dark-mode-pre-body {
    background-color: #121212;
  }
</style>
```
*Note: We will apply the actual `.dark-mode` class to `<body>` in the main JS file, but `html.dark-mode-pre-body` prevents the initial flash.*

- [ ] **Step 2: Create the main toggle logic script**
Create `assets/js/dark-mode.js`.

```javascript
// assets/js/dark-mode.js

document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('dark-mode-toggle');
  const body = document.body;
  const html = document.documentElement;

  if (!toggleBtn) return;

  // Initialize state
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);

  // Apply initial state
  if (isDarkMode) {
    body.classList.add('dark-mode');
  }
  // Remove the temporary FOUC class from head.html
  html.classList.remove('dark-mode-pre-body');

  // Toggle functionality
  toggleBtn.addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
});
```

- [ ] **Step 3: Link the JS script**
Modify `_includes/footer-scripts.html` (or the equivalent file where JS is included at the end of the body) to include the new script.

*Insert:* `<script src="{{ '/assets/js/dark-mode.js' | absolute_url }}"></script>`

- [ ] **Step 4: Commit JS logic**

```bash
git add assets/js/dark-mode.js _includes/head.html _includes/footer-scripts.html
git commit -m "feat: implement dark mode toggle logic and prevent FOUC"
```

---

### Task 4: Local Verification (Manual Step)

**Files:** None

- [ ] **Step 1: Build and Serve**
Run the Jekyll local server to verify the changes.

```bash
bundle exec jekyll serve
```

- [ ] **Step 2: Visual Check**
1. Open the local site.
2. Verify the sun icon appears in the navbar.
3. Click it -> should morph into a moon, and background should smoothly transition to dark.
4. Refresh the page -> should stay dark without flashing white.
5. Click again -> should morph back to sun, background transitions to light.
6. Shrink window to mobile size -> check if hamburger menu layout is broken by the new button.

*(If any layout issues arise, the implementation agent must fix them in a follow-up commit).*