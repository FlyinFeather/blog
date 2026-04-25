(function () {
  var el = document.querySelector('.home-subheading');
  if (!el) return;

  fetch('https://v1.hitokoto.cn/')
    .then(function (res) { return res.json(); })
    .then(function (data) {
      var text = data.hitokoto;
      if (data.from) {
        text += ' —— ' + data.from;
      }
      el.textContent = text;
    })
    .catch(function () {
      el.textContent = 'This is where I will tell my friends way too much about me';
    });

  setInterval(function () {
    fetch('https://v1.hitokoto.cn/')
      .then(function (res) { return res.json(); })
      .then(function (data) {
        var text = data.hitokoto;
        if (data.from) {
          text += ' —— ' + data.from;
        }
        el.style.opacity = 0;
        setTimeout(function () {
          el.textContent = text;
          el.style.opacity = 1;
        }, 400);
      });
  }, 15000);
})();
