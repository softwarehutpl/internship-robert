import 'html-loader?interpolate!./index.html';

import 'jquery';

import siema from 'siema';

import './scss/app.scss';

import 'bootstrap/dist/css/bootstrap.css';

// import 'bootstrap';

import './js/myNav.js';

import'./js/slider.js';

var mySiema = new siema();

const destroy = document.querySelector('.destroy');
const init = document.querySelector('.init');

destroy.addEventListener('click', () => mySiema.destroy());
init.addEventListener('click', () => mySiema.init());