// Initialize AOS animations
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 1000,
    once: true,
  });
});

// Scroll-to-Top Button functionality
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn?.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in page load effect
window.addEventListener('load', function () {
  document.body.classList.add('loaded');
});

// ✅ Contact form validation with thank-you message + actual Formspree submission
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Always prevent default for now

    let isValid = true;

    // Reset error messages and border colors
    document.querySelectorAll('.error-message').forEach(elem => (elem.textContent = ''));
    document.querySelectorAll('input, textarea').forEach(elem => (elem.style.borderColor = '#cccccc'));

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name) {
      document.getElementById('name-error').textContent = 'Please enter your name.';
      document.getElementById('name').style.borderColor = 'red';
      isValid = false;
    }

    if (!email) {
      document.getElementById('email-error').textContent = 'Please enter your email.';
      document.getElementById('email').style.borderColor = 'red';
      isValid = false;
    }

    if (!message) {
      document.getElementById('message-error').textContent = 'Please enter your message.';
      document.getElementById('message').style.borderColor = 'red';
      isValid = false;
    }

    if (isValid) {
      // 👇 Show thank you message
      form.innerHTML = `
        <h2>Thank you!</h2>
        <p>Your message has been sent successfully. I will get back to you soon!</p>
      `;

      // 👇 Actually submit the form to Formspree
      form.submit(); // This only works if the original <form> tag has a proper `action`
    }
  });
}

// 🧠 Mascot randomizer
document.addEventListener("DOMContentLoaded", () => {
  const mascots = [
    'images/mascot1.png',
    'images/mascot2.png',
    'images/mascot3.png',
    'images/mascot4.png',
    'images/mascot5.png'
  ];
  const chosenMascot = mascots[Math.floor(Math.random() * mascots.length)];
  const mascotImg = document.querySelector('.character-float');
  if (mascotImg) mascotImg.src = chosenMascot;
});

// Mascot tips logic
const mascotTips = [
  "Did you drink water today? Stay hydrated!",
  "Click on 'Students' to see cool learning stuff!",
  "Remember: It's okay to ask for help!",
  "Check the 'Resources' tab for fun math games!",
  "You are doing great — keep going!"
];

const mascot = document.getElementById('mascot');
const mascotTip = document.getElementById('mascotTip');

if (mascot && mascotTip) {
  mascot.addEventListener('click', () => {
    const randomTip = mascotTips[Math.floor(Math.random() * mascotTips.length)];
    mascotTip.textContent = randomTip;
    mascotTip.style.opacity = 1;

    mascot.classList.add('talking');
    setTimeout(() => mascot.classList.remove('talking'), 500);

    setTimeout(() => {
      mascotTip.style.opacity = 0;
    }, 4000);
  });
}

window.addEventListener('load', () => {
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

    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    mascotTip.textContent = randomMsg;
    mascotTip.style.opacity = 1;

    setTimeout(() => {
      mascotTip.style.opacity = 0;
    }, 5000);
  }
});

// 👁 Eye blinking effect using a transparent overlay
function blinkMascotEyes() {
  const eyes = document.getElementById('mascot-eyes');
  if (!eyes) return;

  eyes.style.opacity = 1;
  setTimeout(() => {
    eyes.style.opacity = 0;
  }, 200); // eyelid flash duration
}

setInterval(() => {
  blinkMascotEyes();
}, 5000 + Math.random() * 3000); // 5–8 sec
