// ===== Toggle Mobile Menu =====
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

navLinks.forEach(link =>
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  })
);

// ===== Scroll Reveal Animation for Sections =====
const revealElements = document.querySelectorAll(
  '.section-title, .about__container, .skills__container, .portfolio__container, .contact__container, .projects__container, .research__container, .gallery__container, .achievement__container'
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});

// ===== Quote Typing Animation =====
const quotes = [
  {
    text: "The present is theirs; the future, for which I really worked, is mine.",
    author: "Nikola Tesla",
  },
  {
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  },
  {
    text: "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
    author: "Albert Einstein",
  },
  {
    text: "The most important thing in communication is hearing what isn’t said.",
    author: "James Clerk Maxwell",
  },
];

let currentQuoteIndex = 0;
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');

function typeQuote() {
  const currentQuote = quotes[currentQuoteIndex];
  let i = 0;
  quoteText.textContent = '';
  quoteAuthor.textContent = '';

  const typingInterval = setInterval(() => {
    if (i < currentQuote.text.length) {
      quoteText.textContent += currentQuote.text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
      quoteAuthor.textContent = `— ${currentQuote.author}`;
      setTimeout(() => {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        typeQuote();
      }, 3500);
    }
  }, 50);
}

typeQuote();

// ===== Skills Section Reveal (Left and Right) =====
const revealFromSides = document.querySelectorAll('.left-reveal, .right-reveal');

const sideObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateX(0)';
        sideObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealFromSides.forEach(el => {
  el.style.opacity = 0;
  el.style.transition = 'all 0.6s ease';
  el.style.transform = el.classList.contains('left-reveal') ? 'translateX(-50px)' : 'translateX(50px)';
  sideObserver.observe(el);
});

// ===== About Image Reveal on Scroll (from Left) =====
const aboutImage = document.querySelector('.about__img');

const aboutImageObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutImage.style.opacity = 1;
        aboutImage.style.transform = 'translateX(0)';
        aboutImageObserver.unobserve(aboutImage);
      }
    });
  },
  { threshold: 0.3 }
);

if (aboutImage) {
  aboutImage.style.opacity = 0;
  aboutImage.style.transform = 'translateX(-40px)';
  aboutImage.style.transition = 'all 0.6s ease';
  aboutImageObserver.observe(aboutImage);
}

// ===== About Image Hover to Show Alternate Image =====
const aboutImgElement = document.querySelector('.about__img img');

if (aboutImgElement) {
  const originalSrc = aboutImgElement.getAttribute('src');
  const hoverSrc = 'ni-alt.jpg'; // make sure this image exists

  aboutImgElement.addEventListener('mouseenter', () => {
    aboutImgElement.setAttribute('src', hoverSrc);
  });

  aboutImgElement.addEventListener('mouseleave', () => {
    aboutImgElement.setAttribute('src', originalSrc);
  });
}
