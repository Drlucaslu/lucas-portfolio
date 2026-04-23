// ===== 导航栏汉堡菜单 =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// 点击导航链接后关闭菜单
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===== 导航栏滚动效果 =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(15, 23, 42, 0.97)';
  } else {
    navbar.style.background = 'rgba(15, 23, 42, 0.85)';
  }
});

// ===== 滚动淡入动画 =====
const fadeElements = document.querySelectorAll(
  '.stat-card, .timeline-item, .edu-card, .pub-card, .media-card, .contact-item, .about-text, .about-stats'
);

fadeElements.forEach(el => {
  el.classList.add('fade-in');
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // 错开动画时间
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, (i % 4) * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

fadeElements.forEach(el => observer.observe(el));

// ===== 导航高亮当前区域 =====
const sections = document.querySelectorAll('section[id], header[id]');
const navItems = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${id}`) {
            link.style.color = 'var(--accent-light)';
          }
        });
      }
    });
  },
  { threshold: 0.3 }
);

sections.forEach(section => sectionObserver.observe(section));

// ===== Hero 区域微动画 =====
document.addEventListener('mousemove', (e) => {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  heroBg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
});
