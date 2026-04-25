(function (global) {
  function createHitokotoClient(opts) {
    const endpoint = (opts && opts.endpoint) || 'https://v1.hitokoto.cn/?encode=json';
    const timeout = (opts && opts.timeout) || 5000;
    const hasFetch = typeof fetch === 'function';

    return {
      async fetchHitokoto() {
        if (!hasFetch) return null;
        const controller = new AbortController();
        const tid = setTimeout(() => controller.abort(), timeout);
        try {
          const res = await fetch(endpoint, { signal: controller.signal });
          if (!res.ok) return null;
          const data = await res.json();
          if (data && data.hitokoto) {
            return {
              text: data.hitokoto,
              uuid: data.uuid,
              from: data.from || data.from_who
            };
          }
          return null;
        } catch (e) {
          return null;
        } finally {
          clearTimeout(tid);
        }
      }
    };
  }

  global.HitokotoClient = createHitokotoClient;
})(window);
