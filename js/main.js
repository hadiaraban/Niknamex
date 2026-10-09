// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); }
  });
});

// Header shadow on scroll
window.addEventListener('scroll', () => {
  const h = document.querySelector('.site-header');
  if (h) h.style.boxShadow = window.scrollY > 20
    ? '0 4px 20px rgba(0,0,0,.12)'
    : '0 2px 12px rgba(0,0,0,.06)';
});