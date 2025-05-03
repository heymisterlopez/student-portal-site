document.addEventListener('DOMContentLoaded', function () {
  AOS.init({ duration: 1000, once: true });

  const mascots = [
    'images/mascot1.png',
    'images/mascot2.png',
    'images/mascot3.png',
    'images/mascot4.png',
    'images/mascot5.png'
  ];
  const mascotImg = document.getElementById('mascot');
  const mascotEyes = document.getElementById('mascot-eyes');
  const mascotTip = document.getElementById('mascotTip');

  if (mascotImg) {
    mascotImg.src = mascots[Math.floor(Math.random() * mascots.length)];
  }

  // Welcome message on load
  const messages = [
    "Hi there! Ready to learn something fun today?",
    "Let's grow our brains together! 📚✨",
    "You're doing amazing—let's keep it up!",
    "Learning is an adventure, and you're the hero!",
    "Time to shine, superstar learner! 🌟",
    "New day, new knowledge! Let's go!"
  ];
  if (mascotTip) {
    mascotTip.textContent = messages[Math.floor(Math.random() * messages.length)];
    mascotTip.style.opacity = 1;
    setTimeout(() => mascotTip.style.opacity = 0, 5000);
  }

  // Mascot tips on click
  const mascotTips = [
    "Did you drink water today? Stay hydrated!",
    "Click on 'Students' to see cool learning stuff!",
    "Remember: It's okay to ask for help!",
    "Check the 'Resources' tab for fun math games!",
    "You are doing great — keep going!"
  ];

  if (mascotImg && mascotTip) {
    mascotImg.addEventListener('click', () => {
      mascotTip.textContent = mascotTips[Math.floor(Math.random() * mascotTips.length)];
      mascotTip.style.opacity = 1;
      setTimeout(() => mascotTip.style.opacity = 0, 4000);
    });
  }

  // Mascot eye blinking
  function blinkEyes() {
    if (!mascotEyes) return;
    mascotEyes.style.opacity = 1;
    setTimeout(() => mascotEyes.style.opacity = 0, 180);
  }

  setInterval(() => {
    blinkEyes();
  }, 4000 + Math.random() * 2000); // every 4–6 seconds
});

// Scroll-to-top button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.onscroll = function() {
  scrollToTopBtn.style.display = (window.scrollY > 200) ? "block" : "none";
};
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
