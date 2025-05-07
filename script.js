// === Dark Mode Toggle ===
const toggle = document.getElementById('themeToggle');
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
  body.classList.add('dark-mode');
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// === Scroll to Top ===
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  scrollToTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});