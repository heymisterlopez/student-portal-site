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

// === Mascot Message Bubble ===
const mascotTip = document.getElementById('mascotTip');
const mascot = document.getElementById('mascot');

const messages = [
  "Hi there! Ready to learn something fun today?",
  "You're doing amazing—keep it up!",
  "Need help? I'm right here!",
  "Let's learn something new today!",
  "Don't forget to take breaks!",
  "You're on a roll! 📚",
  "Stay curious and have fun!"
];

if (mascot && mascotTip) {
  mascot.addEventListener('click', () => {
    mascotTip.textContent = messages[Math.floor(Math.random() * messages.length)];
    mascotTip.style.opacity = 1;
    setTimeout(() => (mascotTip.style.opacity = 0), 4000);
  });
}
