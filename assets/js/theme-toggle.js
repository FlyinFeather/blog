// Beautiful Jekyll 暗色模式 - 导航栏切换按钮交互
// 移植自 LizardByte/beautiful-jekyll-next 的 initTheme()（适配无 Bootstrap 5 的环境）
// 行为与 Next 一致：点击循环 自动 → 浅色 → 深色，偏好存 localStorage('theme')
(function () {
  'use strict';

  var toggle = document.getElementById('theme-toggle');
  if (!toggle) { return; }
  var icon = document.getElementById('theme-icon');

  var CYCLE = ['auto', 'light', 'dark'];
  var ICONS = {
    auto:  'fa-circle-half-stroke',
    light: 'fa-sun',
    dark:  'fa-moon'
  };
  var NAMES = {
    auto:  '自动（跟随系统）',
    light: '浅色',
    dark:  '深色'
  };

  function getPreferred() {
    var stored = localStorage.getItem('theme');
    return stored ? stored : 'auto';
  }

  function toApply(theme) {
    if (theme === 'auto') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
  }

  function apply(theme) {
    document.documentElement.dataset.bsTheme = toApply(theme);
    if (icon) { icon.className = 'fas ' + ICONS[theme]; }
    toggle.title = '切换主题（当前：' + NAMES[theme] + '）';
    syncGiscus();
  }

  // 可选：让 giscus 评论跟随主题（无 giscus 时静默跳过）
  function syncGiscus() {
    var iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) { return; }
    iframe.contentWindow.postMessage(
      { giscus: { setConfig: { theme: document.documentElement.dataset.bsTheme } } },
      'https://giscus.app'
    );
  }

  apply(getPreferred());

  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    var next = CYCLE[(CYCLE.indexOf(getPreferred()) + 1) % CYCLE.length];
    localStorage.setItem('theme', next);
    apply(next);
  });

  // auto 模式下跟随系统实时切换
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
    if (getPreferred() === 'auto') { apply('auto'); }
  });
})();
