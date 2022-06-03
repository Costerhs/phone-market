import json from './../config.json';
import '../css/style.css';

import openCloseForm from './modules/form.js';
import timer from './modules/timer.js'
import toggleClass from './modules/toggleMode.js';
import sendData from './modules/sendData.js';
import setLink from './modules/setLink.js';
import showBurger from './modules/showBurger.js';
import scrollToMain from './modules/scrollToMain.js';
import testimonialsCreateItem from './modules/testimonialsCreateItem.js';
import pricingCreateItem from './modules/pricingCreateItem.js';



openCloseForm();
scrollToMain();
toggleClass();
sendData();
showBurger();
timer(json.timerEndDate);
setLink(json);
testimonialsCreateItem(json.testimonials);
pricingCreateItem(json.plans)

