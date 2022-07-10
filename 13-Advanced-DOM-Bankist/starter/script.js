'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const allSections = document.querySelectorAll('.section');
const header = document.querySelector('.header');
const twitter = document.querySelector('.nav__link--btn');
const logo = document.querySelector('.nav__logo');

const section1 = document.querySelector('#section--1');
const buttonScroll = document.querySelector('.btn--scroll-to');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

buttonScroll.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

//Page nav
document.querySelector('.nav__links').addEventListener('click', e => {
  e.preventDefault();

  //Matching strat
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');

  //Remove tab
  tabs.forEach(el => el.classList.remove('operations__tab--active'));
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  //Activate tab
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//faded nav
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav__link');

const navFade = (action, opacity) => {
  nav.addEventListener(action, e => {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const sibling = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');

      sibling.forEach(el => {
        if (el !== link) el.style.opacity = opacity;
      });
      logo.style.opacity = opacity;
    }
  });
};

navFade('mouseover', 0.3);
navFade('mouseout', 1);

/*
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
const msg = document.createElement('div');
msg.classList.add('cookie-message');
msg.innerHTML =
  'We you cookies for improved functionality and analytics. <button class="btn btn--open-cookie">Got it!</button>';
// msg.textContent = 'We you cookies for improved functionality and analytics.'
// header.prepend(msg.cloneNode(true));
// header.before(msg);
// header.afster(msg);
header.append(msg);
document.querySelector('.btn--open-cookie').addEventListener('click', e => {
  e.preventDefault();
  msg.remove();
});
msg.style.backgroundColor = '#37383d';
msg.style.width = '104%';
// console.log(getComputedStyle(msg).fontFamily);
msg.style.height =
  Number.parseFloat(getComputedStyle(msg).height, 10) + 40 + 'px';

const section1 = document.querySelector('#section--1');
const buttonScroll = document.querySelector('.btn--scroll-to');

buttonScroll.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');

const h1Alert = () => {
  alert('nice2');

  // h1.removeEventListener('mouseenter', h1Alert);
};
h1.addEventListener('mouseenter', h1Alert);
setTimeout(() => h1.removeEventListener('mouseenter', h1Alert), 50);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('mouseenter', e => {
  e.currentTarget.style.backgroundColor = randomColor();
});

document.querySelector('.nav__links').addEventListener('mouseenter', e => {
  e.currentTarget.style.backgroundColor = randomColor();

  e.stopPropagation();
});

document.querySelector('.nav').addEventListener('mouseenter', function (e) {
  this.style.backgroundColor = randomColor();
});

  console.log(getComputedStyle(msg).height);

// document.documentElement.style.setProperty('--color-primary', 'red');

//attributes
console.log(logo.alt);
console.log(logo.src);
console.log(logo.getAttribute('designer'));
logo.setAttribute('designer', 'Arek');
console.log(logo.getAttribute('designer'));

console.log(twitter.href); //localhost:8080/#
console.log(twitter.getAttribute('href')); //#

console.log(logo.dataset.versionNumber);
console.log(logo.dataset.sexType);

//Classes
logo.classList.add('c');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('xd');

//overwrite all
// logo.className = 'Kacper jarek';

const h1 = document.querySelector('h1');

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
// h1.lastElementChild.style.backgroundColor = 'red';
// h1.nextElementSibling.style.backgroundColor = 'orange';

console.log(h1.closest('.header'));

h1.closest('.header').style.backgroundColor = 'var(--color-secondary)';
const body = h1.closest('body');
body.style.backgroundColor = 'green';

[...h1.parentElement.children].forEach(el => {
  if (el !== h1) el.style.transform = 'scale(.5)';
});

*/
