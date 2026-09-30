// Beautiful Jekyll 暗色模式 - 主题切换交互
// v2：支持桌面（折叠区内）+ 手机（折叠区外）双按钮实例，class 选择器
// 行为：点击循环 自动 → 浅色 → 深色，偏好存 localStorage('theme')
(function () {
  'use strict';

  var toggles = document.querySelectorAll('.theme-toggle');
  if (!toggles.length) { return; }

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

  // 可选：让 giscus 评论跟随主题（无 giscus 时静默跳过）
  function syncGiscus() {
    var iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) { return; }
    iframe.contentWindow.postMessage(
      { giscus: { setConfig: { theme: document.documentElement.dataset.bsTheme } } },
      'https://giscus.app'
    );
  }

  function apply(theme) {
    document.documentElement.dataset.bsTheme = toApply(theme);
    var icons = document.querySelectorAll('.theme-toggle .theme-icon');
    for (var i = 0; i < icons.length; i++) {
      icons[i].className = 'theme-icon fas ' + ICONS[theme];
    }
    for (var j = 0; j < toggles.length; j++) {
      toggles[j].title = '切换主题（当前：' + NAMES[theme] + '）';
    }
    syncGiscus();
  }

  apply(getPreferred());

  for (var k = 0; k < toggles.length; k++) {
    toggles[k].addEventListener('click', function (e) {
      e.preventDefault();
      var next = CYCLE[(CYCLE.indexOf(getPreferred()) + 1) % CYCLE.length];
      localStorage.setItem('theme', next);
      apply(next);
    });
  }

  // auto 模式下跟随系统实时切换
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
    if (getPreferred() === 'auto') { apply('auto'); }
  });
})();
