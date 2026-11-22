// Mobile menu toggle
(function () {
  var nav = document.querySelector('.topnav');
  var btn = nav && nav.querySelector('.menu-btn');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// Image carousels: adds prev/next arrows and dots, supports swipe and arrow keys
document.querySelectorAll('.carousel').forEach(function (car) {
  var slides = Array.prototype.slice.call(car.querySelectorAll('.slide'));
  if (slides.length < 2) return;
  var idx = 0;

  car.setAttribute('tabindex', '0');
  car.setAttribute('aria-roledescription', 'carousel');

  var prev = document.createElement('button');
  prev.className = 'prev';
  prev.setAttribute('aria-label', 'Previous image');
  prev.innerHTML = '&#8249;';
  var next = document.createElement('button');
  next.className = 'next';
  next.setAttribute('aria-label', 'Next image');
  next.innerHTML = '&#8250;';
  var dots = document.createElement('div');
  dots.className = 'dots';
  car.append(prev, next, dots);

  var dotBtns = slides.map(function (_, i) {
    var d = document.createElement('button');
    d.setAttribute('aria-label', 'Show image ' + (i + 1));
    d.addEventListener('click', function () { show(i); });
    dots.appendChild(d);
    return d;
  });

  function show(i) {
    idx = (i + slides.length) % slides.length;
    slides.forEach(function (s, k) { s.classList.toggle('active', k === idx); });
    dotBtns.forEach(function (d, k) { d.setAttribute('aria-current', k === idx ? 'true' : 'false'); });
  }

  prev.addEventListener('click', function () { show(idx - 1); });
  next.addEventListener('click', function () { show(idx + 1); });
  car.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });

  var startX = null;
  car.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
  car.addEventListener('touchend', function (e) {
    if (startX === null) return;
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) show(idx + (dx < 0 ? 1 : -1));
    startX = null;
  });

  show(0);
});
