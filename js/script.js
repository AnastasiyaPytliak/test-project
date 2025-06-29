import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';
import { animateHeader, animateHero, animateOrder } from './animation.js';

const toggleBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuLinks = menu.querySelectorAll('a')
const rangeInput = document.getElementById('range');
const rangeValue = document.getElementById('rangeValue');
const select = document.querySelector('#payments');

// animation
document.addEventListener("DOMContentLoaded", () => {
  animateHeader();
  animateHero();
  animateOrder()
});

// Menu Toggle on mobile
function handleMenuToggle() {
  if (window.innerWidth < 992) {
    toggleBtn.addEventListener('click', toggleHandler);
    menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  } else {
    toggleBtn.removeEventListener('click', toggleHandler);
    menuLinks.forEach(link => {
      link.removeEventListener('click', closeMenu);
    });
    toggleBtn.classList.remove('active');
    menu.classList.remove('active');
  }
}

function toggleHandler() {
  toggleBtn.classList.toggle('active');
  menu.classList.toggle('active');
}

function closeMenu() {
  toggleBtn.classList.remove('active');
  menu.classList.remove('active');
}

handleMenuToggle();

window.addEventListener('resize', handleMenuToggle);

// range
rangeInput.addEventListener('input', () => {
  rangeValue.textContent = `${rangeInput.value}%`;
});

// services
const choices = new Choices(select, {
  searchEnabled: false,
  itemSelectText: '',
  classNames: {
    containerInner:'custom-select',
  }
});

//year
document.querySelector('.year').textContent = new Date().getFullYear();