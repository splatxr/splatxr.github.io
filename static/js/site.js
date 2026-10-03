document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.sx-nav-burger');
  var links = document.querySelector('.sx-nav-links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      links.classList.toggle('is-active');
    });
  }

  document.querySelectorAll('.sx-copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var code = btn.parentElement.querySelector('pre code');
      var label = btn.querySelector('span');
      navigator.clipboard.writeText(code.textContent).then(function () {
        label.textContent = 'Copied!';
        setTimeout(function () { label.textContent = 'Copy'; }, 1500);
      });
    });
  });
});
