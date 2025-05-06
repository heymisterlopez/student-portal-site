// === Initialize AOS ===
document.addEventListener('DOMContentLoaded', () => {
  AOS?.init({ duration: 1000, once: true });

  // Random mascot image (optional)
  const mascots = [
    'images/mascot1.png',
    'images/mascot2.png',
    'images/mascot3.png',
    'images/mascot4.png',
    'images/mascot5.png'
  ];
  const mascotImg = document.querySelector('.character-float');
  if (mascotImg) mascotImg.src = mascots[Math.floor(Math.random() * mascots.length)];
});

// === Scroll to Top Button ===
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  scrollToTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

scrollToTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === Smooth Anchor Scrolling ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// === Mascot Message (on click only) ===
const mascot = document.getElementById('mascot');
const mascotTip = document.getElementById('mascotTip');

if (mascot && mascotTip) {
  mascot.addEventListener('click', () => {
    const tips = [
      "Hi there! 👋",
      "Click a menu item to explore.",
      "You're doing great!",
      "Learning is fun!",
      "Need help? Just ask your teacher."
    ];
    mascotTip.textContent = tips[Math.floor(Math.random() * tips.length)];
    mascotTip.style.opacity = 1;
    setTimeout(() => (mascotTip.style.opacity = 0), 4000);
  });
}

// === Theme Toggle ===
const toggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (toggle) {
  toggle.checked = prefersDark;
  if (prefersDark) document.body.classList.add('dark-mode');
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggle.checked);
  });
}

// === Contact Form Validation ===
const contactForm = document.getElementById('contactForm');
const thankYouMessage = document.getElementById('thankYouMessage');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    let hasError = false;

    if (!name) {
      document.getElementById('name-error').textContent = 'Please enter your name.';
      hasError = true;
    }

    if (!email || !email.includes('@')) {
      document.getElementById('email-error').textContent = 'Please enter a valid email.';
      hasError = true;
    }

    if (!message) {
      document.getElementById('message-error').textContent = 'Please enter a message.';
      hasError = true;
    }

    if (hasError) return;

    // Submit to Formspree
    fetch(contactForm.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    })
      .then(res => {
        if (res.ok) {
          contactForm.style.display = 'none';
          if (thankYouMessage) thankYouMessage.style.display = 'block';
        } else {
          alert('Oops! Something went wrong. Please try again later.');
        }
      })
      .catch(() => {
        alert('There was an error submitting the form.');
      });
  });
}
