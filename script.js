/* ============================================================
   SCRIPT.JS — Ayan Asif Portfolio (Recruiter Version)
============================================================ */

/* ── NAVBAR SHADOW ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 10));

/* ── MOBILE MENU ── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

/* ── ACTIVE NAV HIGHLIGHT ── */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
const secObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const act = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (act) act.classList.add('active');
    }
  });
}, { threshold: 0.35 });
sections.forEach(s => secObserver.observe(s));

/* ── FADE-IN ON SCROLL ── */
const fadeEls = document.querySelectorAll('.video-card, .card-wide, .academic-block, .report-highlights li');
fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .55s ease, transform .55s ease';
});
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
fadeEls.forEach(el => fadeObserver.observe(el));

/* ── CONTACT FORM ── */
document.getElementById('sendBtn').addEventListener('click', () => {
  const n    = document.getElementById('fname').value.trim();
  const e    = document.getElementById('femail').value.trim();
  const m    = document.getElementById('fmessage').value.trim();
  const note = document.getElementById('formNote');
  if (!n || !e || !m) { note.style.color = '#dc2626'; note.textContent = 'Please fill in all fields.'; return; }
  if (!e.includes('@')) { note.style.color = '#dc2626'; note.textContent = 'Enter a valid email address.'; return; }
  note.style.color = '#16a34a';
  note.textContent = "✅ Thanks! I'll get back to you soon.";
  ['fname', 'femail', 'fmessage'].forEach(id => document.getElementById(id).value = '');
  setTimeout(() => { note.textContent = ''; }, 5000);
});
