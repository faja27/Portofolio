// ─── NAVIGATION INJECTION ───
const NAV_LINKS = [
  { href: 'index.html',       label: '~/home' },
  { href: 'experience.html',  label: '~/experience' },
  { href: 'study.html',       label: '~/study' },
  { href: 'certifications.html', label: '~/certifications' },
  { href: 'projects.html',    label: '~/projects' },
];

const FOOTER_LINKS = [
  {
    href: 'https://github.com/faja27',
    label: 'GitHub',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`
  },
  {
    href: 'https://www.linkedin.com/in/mochammad-farhan-x27/',
    label: 'LinkedIn',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
  },
  {
    href: 'mailto:fmochammad1@gmail.com',
    label: 'Email',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`
  },
  {
    href: 'https://www.threads.com/@farhan_._.27',
    label: 'Threads',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.028-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.594 12c.022 3.086.714 5.496 2.051 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.66-.016 4.463-.679 5.738-2.084 1.517-1.663 1.598-3.748 1.598-4.379 0-.01 0-.02-.001-.029h-5.29v-2.16h7.49v.027c0 1.148-.085 4.247-2.133 6.503C17.952 21.89 15.466 24 12.187 24zm5.847-12.765h.001-.001zm-5.58-1.335c-1.61 0-2.674.68-3.263 1.26-.795.785-1.194 1.895-1.194 3.3 0 2.69 1.498 4.297 4.003 4.317 1.82-.012 2.95-.56 3.702-1.783.529-.859.798-1.954.835-3.3h-4.083v-.001z"/></svg>`
  }
];

function injectNav(activePage) {
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <a class="nav-logo" href="index.html">mfarhan<span>.dev</span></a>
    <ul class="nav-links">
      ${NAV_LINKS.map(l => `<li><a href="${l.href}" class="${l.href === activePage ? 'active' : ''}">${l.label}</a></li>`).join('')}
    </ul>
    <div class="lang-toggle">
      <button class="lang-btn" data-lang="en" title="English">EN</button>
      <span class="lang-sep">|</span>
      <button class="lang-btn" data-lang="id" title="Indonesia">ID</button>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  `;

  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'mobile-menu';
  mobileMenu.innerHTML = NAV_LINKS.map(l =>
    `<a href="${l.href}" class="${l.href === activePage ? 'active' : ''}">${l.label}</a>`
  ).join('');

  document.body.prepend(mobileMenu);
  document.body.prepend(nav);

  const hamburger = document.getElementById('hamburger');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
}

function injectFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="footer-links">
      ${FOOTER_LINKS.map(l => `
        <a href="${l.href}" target="_blank" rel="noopener noreferrer">
          ${l.svg} ${l.label}
        </a>
      `).join('')}
    </div>
    <p class="footer-copy">© ${new Date().getFullYear()} Mochammad Farhan · Built with passion & caffeine ☕</p>
  `;
  document.body.appendChild(footer);
}

function initScrollAnimations() {
  const els = document.querySelectorAll('.fade-up');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}
