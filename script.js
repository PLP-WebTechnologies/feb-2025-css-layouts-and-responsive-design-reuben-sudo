function showMessage() {
    alert("Thanks for visiting my portfolio, I appreciate your interest!");
  }
// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
      }
  });
});

// Show message on form submit
function showMessage() {
  event.preventDefault();
  alert("Thanks for your message! I'll get back to you soon.");
}

// Scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
scrollBtn.id = 'scrollTopBtn';
document.body.appendChild(scrollBtn);

scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '20px';
scrollBtn.style.right = '20px';
scrollBtn.style.padding = '10px';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.backgroundColor = '#007bff';
scrollBtn.style.color = '#fff';
scrollBtn.style.fontSize = '18px';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
scrollBtn.style.zIndex = '1000';

// Scroll-to-top functionality
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/hide scroll-to-top button
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
      scrollBtn.style.display = 'block';
  } else {
      scrollBtn.style.display = 'none';
  }
});

// Reveal sections on scroll
const sections = document.querySelectorAll('.section');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
      }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add('hidden');
  revealObserver.observe(section);
});
