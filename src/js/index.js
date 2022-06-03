import openCloseForm from './modules/form.js';
import timer from './modules/timer.js'
import toggleClass from './modules/toggleMode.js';
import sendData from './modules/sendData.js';
import showConfigDataInLayout from './modules/showConfigDataInLayout.js';
import showBurger from './modules/showBurger.js';
import scrollToMain from './modules/scrollToMain.js';

import json from './../config.json';
import '../css/style.css';



openCloseForm();
scrollToMain();
toggleClass();
sendData();
showBurger();
timer(json.timerEndDate);
showConfigDataInLayout(json);


