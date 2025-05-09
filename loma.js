/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
}

if (navClose) {
  navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));
}

/*=============== REMOVE MENU MOBILE ===============*/
document.querySelectorAll('.nav__link').forEach(n =>
  n.addEventListener('click', () => navMenu.classList.remove('show-menu'))
);

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header');
  window.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  window.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
                        : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const link = document.querySelector('.nav__link[href*=' + sectionId + ']');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link?.classList.add('active-link');
    } else {
      link?.classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
ScrollReveal().reveal(`.home__data, .about__img, .projects__card, .contact__content`, {
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  interval: 100,
});
ScrollReveal().reveal(`.home__img, .about__data`, { origin: 'bottom' });
ScrollReveal().reveal(`.section__title`, { origin: 'left' });

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme';
const iconTheme = 'ri-sun-line';

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
});

/*=============== EXTRA: LOOPING ANIMATIONS ===============*/
// Rotation animation
const loopRotation = () => {
  const rotatingItems = document.querySelectorAll('.rotate-360');
  rotatingItems.forEach(el => {
    let angle = 0;
    setInterval(() => {
      angle = (angle + 1) % 360;
      el.style.transform = `rotateY(${angle}deg)`;
    }, 30);
  });
};

// Floating animation
const loopFloating = () => {
  const floating = document.querySelectorAll('.float-up-down');
  floating.forEach(el => {
    let y = 0;
    let direction = 1;
    setInterval(() => {
      if (y >= 10 || y <= -10) direction *= -1;
      y += direction;
      el.style.transform = `translateY(${y}px)`;
    }, 100);
  });
};

// Flicker animation
const flickerEffect = () => {
  const flickers = document.querySelectorAll('.flicker');
  flickers.forEach(el => {
    setInterval(() => {
      el.style.opacity = Math.random() > 0.5 ? 1 : 0.7;
    }, 200);
  });
};

window.addEventListener('DOMContentLoaded', () => {
  loopRotation();
  loopFloating();
  flickerEffect();
});
