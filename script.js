// === DOMContentLoaded Initial Setup ===
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS (Animate on Scroll)
  AOS?.init({ duration: 1000, once: true });

  // Random Mascot Image
  const mascots = [
    'images/mascot1.png',
    'images/mascot2.png',
    'images/mascot3.png',
    'images/mascot4.png',
    'images/mascot5.png'
  ];
  const mascotImg = document.querySelector('.character-float');
  if (mascotImg) mascotImg.src = mascots[Math.floor(Math.random() * mascots.length)];

  // Set dark mode based on saved preference
  const toggle = document.getElementById('themeToggle');
  const savedDarkMode = localStorage.getItem('darkMode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (toggle) {
    toggle.checked = savedDarkMode === 'true' || (!savedDarkMode && prefersDark);
    document.body.classList.toggle('dark-mode', toggle.checked);
    toggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode', toggle.checked);
      localStorage.setItem('darkMode', toggle.checked);
    });
  }

  // Smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor =>
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    })
  );

  // Scroll to Top Button Logic
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  window.addEventListener('scroll', () => {
    scrollToTopBtn.style.display =
      document.documentElement.scrollTop > 200 ? 'block' : 'none';
  });

  scrollToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mascot Blinking Eyes
  function blinkMascotEyes() {
    const eyes = document.getElementById('mascot-eyes');
    if (!eyes) return;
    eyes.style.opacity = 1;
    setTimeout(() => (eyes.style.opacity = 0), 200);
  }
  setInterval(blinkMascotEyes, 5000 + Math.random() * 3000);

  // Mascot Welcome Message on Load
  const mascotTip = document.getElementById('mascotTip');
  if (mascotTip) {
    const messages = [
      "Hi there! Ready to learn something fun today?",
      "Let's grow our brains together! 📚✨",
      "You're doing amazing—let's keep it up!",
      "Learning is an adventure, and you're the hero!",
      "Time to shine, superstar learner! 🌟",
      "New day, new knowledge! Let's go!"
    ];
    mascotTip.textContent = messages[Math.floor(Math.random() * messages.length)];
    mascotTip.style.opacity = 1;
    setTimeout(() => (mascotTip.style.opacity = 0), 5000);
  }

  // Mascot Click Interaction
  const mascot = document.getElementById('mascot');
  if (mascot && mascotTip) {
    mascot.addEventListener('click', () => {
      const tips = [
        "Did you drink water today? Stay hydrated!",
        "Click on 'Students' to see cool learning stuff!",
        "Remember: It's okay to ask for help!",
        "Check the 'Resources' tab for fun math games!",
        "You're doing great — keep going!",
        "Dark mode makes everything cooler 😎",
        "Every mistake helps you grow!",
        "Smile! Learning is fun!",
        "Give yourself a brain break if you need one 🧠✨"
      ];
      mascotTip.textContent = tips[Math.floor(Math.random() * tips.length)];
      mascotTip.style.opacity = 1;
      mascot.classList.add('talking');
      setTimeout(() => mascot.classList.remove('talking'), 500);
      setTimeout(() => (mascotTip.style.opacity = 0), 4000);
    });
  }

  // Contact Form Validation
  const contactForm = document.getElementById('contactForm');
  const thankYouMessage = document.getElementById('thankYouMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Clear previous errors
      document.querySelectorAll('.error-message').forEach(el => (el.textContent = ''));

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
});
