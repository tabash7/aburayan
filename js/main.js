/* =============================================
   Alretaj – JavaScript (Pure JS, no deps)
   ============================================= */

(function () {
  'use strict';

  /* ─── 1. Hero Canvas — Particle Network ─── */
  (function initCanvas() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W, H, particles, animId;

    const PARTICLE_COUNT = 60;
    const MAX_DIST = 150;
    const COLORS = ['#4f46e5', '#06b6d4', '#8b5cf6'];

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    function randomBetween(a, b) { return a + Math.random() * (b - a); }

    function createParticles() {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: randomBetween(0, W),
        y: randomBetween(0, H),
        vx: randomBetween(-0.4, 0.4),
        vy: randomBetween(-0.4, 0.4),
        r: randomBetween(1.5, 3),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Update & draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.55;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = particles[i].color;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    window.addEventListener('resize', () => {
      cancelAnimationFrame(animId);
      resize();
      draw();
    });

    resize();
    createParticles();
    draw();
  })();

  /* ─── 2. Navbar Scroll Behavior ─── */
  (function initNavbar() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function onScroll() {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Active nav link highlighting
      let current = '';
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.id;
        }
      });

      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();

  /* ─── 3. Hamburger / Mobile Menu ─── */
  (function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggle(open) {
      hamburger.classList.toggle('open', open);
      mobileMenu.classList.toggle('open', open);
      mobileMenu.setAttribute('aria-hidden', String(!open));
      hamburger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    }

    hamburger.addEventListener('click', () => toggle(!hamburger.classList.contains('open')));

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => toggle(false));
    });

    // Close on ESC
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) toggle(false);
    });
  })();

  /* ─── 4. Scroll Animations (AOS-like) ─── */
  (function initAOS() {
    const elements = document.querySelectorAll('[data-aos]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.aosDelay || 0);
          setTimeout(() => {
            entry.target.classList.add('aos-animate');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach(el => observer.observe(el));
  })();

  /* ─── 5. Counter Animations ─── */
  (function initCounters() {
    const counters = document.querySelectorAll('.count, .metric-value');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));

    function animateCounter(el) {
      const target = parseInt(el.dataset.target, 10);
      const duration = 1800;
      const start = performance.now();

      function step(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    }
  })();

  /* ─── 6. Solutions Tabs ─── */
  (function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;

        tabBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        tabPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const panel = document.getElementById('panel-' + target);
        if (panel) panel.classList.add('active');
      });
    });
  })();

  /* ─── 7. Testimonials Carousel ─── */
  (function initCarousel() {
    const track = document.getElementById('testimonial-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const dotsWrap = document.getElementById('carousel-dots');

    if (!track) return;

    const cards = Array.from(track.children);
    let current = 0;
    let visibleCount = getVisibleCount();
    let maxIndex = Math.max(0, cards.length - visibleCount);

    function getVisibleCount() {
      return window.innerWidth < 700 ? 1 : 2;
    }

    // Build dots
    function buildDots() {
      dotsWrap.innerHTML = '';
      const total = Math.ceil(cards.length / visibleCount);
      for (let i = 0; i < total; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        dot.addEventListener('click', () => goTo(i * visibleCount));
        dotsWrap.appendChild(dot);
      }
    }

    function updateDots() {
      const dots = dotsWrap.querySelectorAll('.carousel-dot');
      const activeIdx = Math.floor(current / visibleCount);
      dots.forEach((d, i) => d.classList.toggle('active', i === activeIdx));
    }

    function goTo(idx) {
      current = Math.max(0, Math.min(idx, maxIndex));
      const cardWidth = cards[0].offsetWidth + 24; // 24 = gap
      track.style.transform = `translateX(-${current * cardWidth}px)`;
      updateDots();
    }

    prevBtn.addEventListener('click', () => goTo(current - visibleCount));
    nextBtn.addEventListener('click', () => {
      const next = current + visibleCount;
      goTo(next > maxIndex ? 0 : next);
    });

    // Auto-play
    let autoPlay = setInterval(() => {
      const next = current + visibleCount;
      goTo(next > maxIndex ? 0 : next);
    }, 5000);

    [prevBtn, nextBtn].forEach(btn => {
      btn.addEventListener('click', () => {
        clearInterval(autoPlay);
        autoPlay = setInterval(() => {
          const next = current + visibleCount;
          goTo(next > maxIndex ? 0 : next);
        }, 5000);
      });
    });

    window.addEventListener('resize', () => {
      visibleCount = getVisibleCount();
      maxIndex = Math.max(0, cards.length - visibleCount);
      current = 0;
      buildDots();
      goTo(0);
    });

    buildDots();
    goTo(0);
  })();

  /* ─── 8. Contact Form — Formspree ─── */
  (function initForm() {
    const form = document.getElementById('contact-form');
    const success = document.getElementById('form-success');
    const errorEl = document.getElementById('form-error');
    const btn = document.getElementById('submit-btn');
    const btnText = btn ? btn.querySelector('.btn-text') : null;

    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // ── Client-side validation ──
      var required = form.querySelectorAll('[required]');
      var valid = true;

      required.forEach(function (field) {
        field.style.borderColor = '';
        field.style.boxShadow = '';
        if (!field.value.trim()) {
          field.style.borderColor = 'rgba(239,68,68,0.6)';
          field.style.boxShadow = '0 0 0 3px rgba(239,68,68,0.1)';
          valid = false;
        }
      });

      if (!valid) return;

      // ── Loading state ──
      btn.disabled = true;
      btnText.textContent = 'Sending…';
      btn.style.opacity = '0.75';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' },
      })
        .then(function (response) {
          if (response.ok) {
            // ── Success ──
            form.style.display = 'none';
            success.classList.add('visible');
          } else {
            return response.json().then(function (json) {
              var msg = (json.errors || []).map(function (err) { return err.message; }).join(', ')
                || 'Something went wrong. Please try again.';
              showError(msg);
              resetBtn();
            });
          }
        })
        .catch(function () {
          showError('Network error — please check your connection and try again.');
          resetBtn();
        });

      function resetBtn() {
        btn.disabled = false;
        btnText.textContent = 'Send Message';
        btn.style.opacity = '';
      }

      function showError(msg) {
        if (errorEl) {
          errorEl.textContent = msg;
          errorEl.classList.add('visible');
          setTimeout(function () { errorEl.classList.remove('visible'); }, 6000);
        }
      }
    });
  })();

  /* ─── 9. Back to Top ─── */
  (function initBackToTop() {
    const btn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  })();

  /* ─── 10. Smooth scroll for anchor links ─── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

})();
