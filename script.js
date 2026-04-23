// 邮箱防爬虫：点击后才显示，地址拆分存储
function revealEmail() {
  const u = 'drluliang';
  const d = 'gmail.com';
  const addr = u + '@' + d;
  const el = document.getElementById('email-text');
  const link = document.createElement('a');
  link.href = 'mailto:' + addr;
  link.textContent = addr;
  link.style.color = '#444';
  el.innerHTML = '';
  el.appendChild(link);
  // 同时让整个 contact-item 可点击
  const wrapper = document.getElementById('email-reveal');
  wrapper.style.cursor = 'default';
}

// 汉堡菜单
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// 滚动淡入
const fadeEls = document.querySelectorAll(
  '.stat-card, .timeline-item, .edu-card, .pub-card, .media-card, .contact-item'
);

fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), (i % 5) * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

fadeEls.forEach(el => observer.observe(el));
