(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const supportsVT = 'startViewTransition' in document && CSS.supports('view-transition-name', 'none');

  // Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // Burger + a11y
  const burger = document.querySelector('.burger');
  const links = document.querySelector('.links');
  burger?.addEventListener('click', () => {
    const open = links?.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    links.classList.remove('open');
    burger?.setAttribute('aria-expanded', 'false');
  }));

  // Sweep-in on load (JS fallback path)
  if (!reduce) {
    let sweep = false;
    try { sweep = sessionStorage.getItem('asel-sweep') === '1'; sessionStorage.removeItem('asel-sweep'); } catch (_) {}
    if (sweep || !supportsVT) {
      document.body.classList.add('is-entering');
      document.body.addEventListener('animationend', () => document.body.classList.remove('is-entering'), { once: true });
    }
  }

  // Cross-document View Transitions native when supported; JS fallback otherwise
  if (!supportsVT && !reduce) {
    document.addEventListener('click', (ev) => {
      const a = ev.target.closest('a[href]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || a.target === '_blank') return;
      if (a.origin && a.origin !== location.origin) return;
      const url = new URL(href, location.href);
      if (url.pathname === location.pathname && url.hash) return;
      ev.preventDefault();
      try { sessionStorage.setItem('asel-sweep', '1'); } catch (_) {}
      document.body.classList.add('is-leaving');
      setTimeout(() => { location.href = href; }, 1650);
    });
  }

  // Prevent carousel card link activation on model-viewer interaction
  document.querySelectorAll('.slide model-viewer').forEach((mv) => {
    const link = mv.closest('a');
    if (!link) return;
    let interacting = false, moved = false;
    let startX = 0, startY = 0;
    mv.addEventListener('pointerdown', (e) => { 
      interacting = true; moved = false;
      startX = e.clientX; startY = e.clientY;
    });
    mv.addEventListener('pointermove', (e) => {
      if (interacting && (Math.abs(e.clientX - startX) > 2 || Math.abs(e.clientY - startY) > 2)) moved = true;
    });
    mv.addEventListener('pointerup', () => { 
      setTimeout(() => { interacting = false; }, moved ? 100 : 0);
    });
    link.addEventListener('click', (e) => { if (interacting) { e.preventDefault(); } });
  });

  // Carousel (scroll-snap + touch)
  document.querySelectorAll('[data-carousel]').forEach((root) => {
    const track = root.querySelector('.carousel');
    if (!track) return;
    const slides = [...track.querySelectorAll('.slide')];
    const dots = root.querySelector('.dots');
    const prev = root.querySelector('[data-prev]');
    const next = root.querySelector('[data-next]');
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.className = 'dot' + (i === 0 ? ' on' : '');
      b.type = 'button';
      b.setAttribute('aria-label', `Slayt ${i + 1}`);
      b.addEventListener('click', () => slides[i].scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', inline: 'center', block: 'nearest' }));
      dots?.appendChild(b);
    });
    const activeIndex = () => {
      const mid = track.scrollLeft + track.clientWidth / 2;
      let best = 0, bestDist = Infinity;
      slides.forEach((s, i) => {
        const c = s.offsetLeft + s.offsetWidth / 2;
        const d = Math.abs(c - mid);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      return best;
    };
    const sync = () => {
      const best = activeIndex();
      dots?.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('on', i === best));
      if (prev) prev.disabled = best === 0;
      if (next) next.disabled = best === slides.length - 1;
    };
    track.addEventListener('scroll', () => requestAnimationFrame(sync), { passive: true });
    prev?.addEventListener('click', () => {
      const i = Math.max(0, activeIndex() - 1);
      slides[i].scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', inline: 'center', block: 'nearest' });
    });
    next?.addEventListener('click', () => {
      const i = Math.min(slides.length - 1, activeIndex() + 1);
      slides[i].scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', inline: 'center', block: 'nearest' });
    });
    sync();
  });

  // Synced compare viewers (guard feedback loops)
  window.initCompareSync = function initCompareSync(aSel, bSel) {
    const a = document.querySelector(aSel);
    const b = document.querySelector(bSel);
    if (!a || !b) return;
    let lock = false;
    const mirror = (src, dst) => {
      if (lock) return;
      lock = true;
      try {
        dst.cameraOrbit = src.cameraOrbit;
        dst.cameraTarget = src.cameraTarget;
        dst.fieldOfView = src.fieldOfView;
      } finally {
        requestAnimationFrame(() => { lock = false; });
      }
    };
    a.addEventListener('camera-change', () => mirror(a, b));
    b.addEventListener('camera-change', () => mirror(b, a));
  };
})();
