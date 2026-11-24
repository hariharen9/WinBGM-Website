(() => {
  const progress = document.getElementById('topProgress');
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menu.classList.toggle('open', open);
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  }));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // FAQ accordions: keep the reading flow focused without preventing multiple answers.
  document.querySelectorAll('.faq-list details').forEach(detail => {
    detail.addEventListener('toggle', () => {
      const icon = detail.querySelector('summary span');
      if (icon) icon.textContent = detail.open ? '−' : '+';
    });
  });

  // Lenis smooth scrolling — progressive enhancement, native scroll as fallback.
  if (window.Lenis && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'auto';
    const lenis = new Lenis({ lerp: 0.11, smoothWheel: true });
    const raf = time => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', event => {
        const hash = link.getAttribute('href');
        if (hash.length < 2) return;
        const target = document.querySelector(hash);
        if (!target) return;
        event.preventDefault();
        lenis.scrollTo(target, { offset: -84 });
        history.replaceState(null, '', hash);
      });
    });
  }

  // Slight pointer-responsive depth on the desktop product window. Disabled for touch/reduced motion.
  const product = document.getElementById('appWindow');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (product && !reduceMotion && window.matchMedia('(pointer:fine)').matches && window.matchMedia('(min-width: 1101px)').matches) {
    const visual = product.parentElement;
    visual.addEventListener('pointermove', event => {
      const rect = visual.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      product.style.transform = `perspective(1600px) rotateY(${-3.5 + x * 2.2}deg) rotateX(${1.2 - y * 1.6}deg)`;
    });
    visual.addEventListener('pointerleave', () => { product.style.transform = ''; });
  }
})();
