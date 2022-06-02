import openCloseForm from './module/form.js';
import timer from './module/timer.js'
import datas from './module/datas.js'
import toggleClass from './module/toggleMode.js';
import sendData from './module/sendData.js';
import showConfigDataInLayout from './module/showConfigDataInLayout.js';
import showBurger from './module/showBurger.js';
import scrollToMain from './module/scrollToMain.js';

openCloseForm();
scrollToMain();
toggleClass();
sendData();
showBurger();
datas().then(el => {
    timer(el.timerEndDate);
    showConfigDataInLayout(el);
});

