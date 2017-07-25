import 'html-loader?interpolate!./index.html';

import 'jquery';

import siema from 'siema';

import './scss/app.scss';

import 'bootstrap/dist/css/bootstrap.css';

// import 'bootstrap';

//import './js/myNav.js';

//import'./js/slider.js';

var mySiema = new siema();

const destroy = document.querySelector('.destroy');

const init = document.querySelector('.init');

destroy.addEventListener('click', () => mySiema.destroy());

init.addEventListener('click', () => mySiema.init());

const btn0 = document.querySelector('.b0');

const btn1 = document.querySelector('.b1');

const btn2 = document.querySelector('.b2');

const btn3 = document.querySelector('.b3');

const btn4 = document.querySelector('.b4');

btn0.addEventListener('click', () => mySiema.goTo(0));

btn1.addEventListener('click', () => mySiema.goTo(1));

btn2.addEventListener('click', () => mySiema.goTo(2));

btn3.addEventListener('click', () => mySiema.goTo(3));

btn4.addEventListener('click', () => mySiema.goTo(4));

