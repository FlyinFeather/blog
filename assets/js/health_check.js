(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var statusEl = document.getElementById('domain-health') || document.querySelector('.domain-health');
    if (!statusEl) return;
    statusEl.textContent = '检查中...';
    if (!('fetch' in window)) {
      statusEl.textContent = 'Fetch 不可用，域名可能无法完成外部请求';
      return;
    }
    fetch('https://v1.hitokoto.cn/?encode=json', { mode: 'cors', cache: 'no-store' })
      .then(function(res){ if (res.ok) return res.json(); throw new Error('Network error'); })
      .then(function(_){ statusEl.textContent = 'Hitokoto 外部 API 可访问'; })
      .catch(function(err){ statusEl.textContent = 'Hitokoto 外部 API 可能被阻止，使用兜底文本'; console.error('health_check', err); });
  });
})();
