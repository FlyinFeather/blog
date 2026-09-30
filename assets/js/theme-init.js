// Beautiful Jekyll 暗色模式 - 主题初始化
// 移植自 LizardByte/beautiful-jekyll-next 的 assets/js/theme-init.js
// 必须在 <head> 中尽早同步执行，防止页面渲染时闪白（FOUC）
(function () {
  'use strict';

  var getStoredTheme = function () { return localStorage.getItem('theme'); };

  var getPreferredTheme = function () {
    var stored = getStoredTheme();
    return stored ? stored : 'auto';
  };

  var getThemeToApply = function (theme) {
    if (theme === 'auto') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
  };

  document.documentElement.dataset.bsTheme = getThemeToApply(getPreferredTheme());
})();
