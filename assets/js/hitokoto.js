(function() {
  const subtitleEl = document.querySelector('.home-subheading') ||
    document.querySelector('.intro-header .page-heading .page-subheading') ||
    document.querySelector('.intro-header .home-subheading');
  if (!subtitleEl) return;

  const FALLBACK_QUOTES = [
    '这是一个演示副标题的站点。',
    '欢迎来到我的主页！',
    '持续学习、持续进步。'
  ];
  let idx = 0;
  const supportsFetch = typeof fetch === 'function';

  function renderText(text) {
    if (!subtitleEl) return;
    subtitleEl.style.opacity = 0;
    setTimeout(() => {
      subtitleEl.textContent = text;
      subtitleEl.style.opacity = 1;
    }, 150);
  }

  async function fetchHitokoto(timeout = 5000) {
    if (!supportsFetch) return null;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    try {
      const res = await fetch('https://v1.hitokoto.cn/?encode=json', { signal: controller.signal });
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      if (data && data.hitokoto) {
        if (data.uuid) {
          const anchor = document.getElementById('hitokoto_text');
          if (anchor) {
            anchor.href = `https://hitokoto.cn/?uuid=${data.uuid}`;
            anchor.innerText = data.hitokoto;
          }
        }
        return (data.hitokoto + (data.from ? ' — ' + data.from : ''));
      }
      return null;
    } catch (e) {
      return null;
    } finally {
      clearTimeout(id);
    }
  }

  (async function init() {
    const first = await fetchHitokoto(5000);
    if (first) {
      renderText(first);
    } else {
      renderText(FALLBACK_QUOTES[0]);
    }
  })();

  // 轮播切换：每 15 秒切换一次
  setInterval(async function() {
    const next = await fetchHitokoto(5000);
    const text = next ? next : FALLBACK_QUOTES[idx % FALLBACK_QUOTES.length];
    idx++;
    renderText(text);
  }, 15000);
})();
