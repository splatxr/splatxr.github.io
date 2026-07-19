document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.sx-nav-burger');
  var links = document.querySelector('.sx-nav-links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      links.classList.toggle('is-active');
    });
  }
});
