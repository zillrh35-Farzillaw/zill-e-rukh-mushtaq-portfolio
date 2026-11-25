/* Zill E Rukh Mushtaq — site behaviour (v2) */
(function () {
  var header = document.querySelector('.site-header');
  var nav = document.getElementById('nav');
  var burger = document.querySelector('.burger');

  // header shadow on scroll
  var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // mobile menu
  if (burger) burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // reveal on scroll
  var els = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function (e) { io.observe(e); });
})();

/* gallery lightbox */
(function () {
  var lb = document.getElementById('lb'); if (!lb) return;
  var img = lb.querySelector('img'), cap = lb.querySelector('.cap');
  document.querySelectorAll('[data-full]').forEach(function (f) {
    f.addEventListener('click', function () {
      img.src = f.getAttribute('data-full'); img.alt = f.querySelector('img').alt;
      cap.innerHTML = f.querySelector('figcaption') ? f.querySelector('figcaption').innerHTML.replace('<b>', '<span>').replace('</b>', '</span>') : '';
      lb.classList.add('open'); document.body.style.overflow = 'hidden';
    });
  });
  var close = function () { lb.classList.remove('open'); document.body.style.overflow = ''; img.src = ''; };
  lb.addEventListener('click', function (e) { if (e.target === lb || e.target.tagName === 'BUTTON') close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();

/* consultation request -> WhatsApp */
function sendToWhatsApp(e) {
  e.preventDefault();
  var g = function (id) { return (document.getElementById(id).value || '').trim(); };
  var lines = ['Assalam-o-Alaikum, I would like to book a consultation.', '', 'Name: ' + g('bk-name'), 'Phone: ' + g('bk-phone')];
  if (g('bk-email')) lines.push('Email: ' + g('bk-email'));
  lines.push('Matter: ' + g('bk-matter'));
  if (g('bk-date')) lines.push('Preferred date: ' + g('bk-date'));
  if (g('bk-msg')) lines.push('Details: ' + g('bk-msg'));
  lines.push('', 'Sent via your portfolio site.');
  var ok = document.getElementById('bk-ok'); if (ok) ok.classList.add('show');
  window.open('https://wa.me/923100043077?text=' + encodeURIComponent(lines.join('\n')), '_blank');
  return false;
}

/* old one-page links (e.g. /#booking) -> new pages */
(function () {
  if (location.pathname !== '/' && location.pathname !== '/index.html') return;
  var map = { profile: '/about/', experience: '/about/#experience', publication: '/publications/', services: '/practice/',
    engagements: '/credentials/', credentials: '/credentials/', record: '/gallery/', gallery: '/gallery/', education: '/about/#education',
    memberships: '/credentials/#memberships', competencies: '/about/#expertise', booking: '/contact/', contact: '/contact/' };
  var h = location.hash.replace('#', ''); if (map[h]) location.replace(map[h]);
})();
