let pricingBtn = document.querySelector('.nav__pricing');
let pricing = document.querySelector('.pricing');

let features = document.querySelector('.featContainer');
let featuresBtn = document.querySelector('.nav__features');

let faq = document.querySelector('.faq');
let faqBtn = document.querySelector('.nav__faq');

let testimonials = document.querySelector('.testimonials');
let testimonialsBtn = document.querySelector('.nav__testimonials');

let mainBtnInHeader = document.querySelector('.header__logo');
let mainBtnInFooter = document.querySelector('.logo')
let main = document.querySelector('.mainContainer');

pricingBtn.addEventListener('click', scrollsToTag.bind(this, pricing));

featuresBtn.addEventListener('click', scrollsToTag.bind(this, features));

faqBtn.addEventListener('click', scrollsToTag.bind(this, faq));

testimonialsBtn.addEventListener('click', scrollsToTag.bind(this, testimonials));

mainBtnInHeader.addEventListener('click', scrollsToTag.bind(this, main));
mainBtnInFooter.addEventListener('click', scrollsToTag.bind(this, main));


function scrollsToTag(tag) {
     window.scroll(0, tag.offsetTop)
}


//timer
let day = document.querySelector('.day');
let houres = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');


setInterval(() => {
     let timeBeforeEnd = "03.06.2022 21:20".split(' ');
     let date = new Date();

     let dateArr = timeBeforeEnd[0].split('.').concat(timeBeforeEnd[1].split(':'));
     let enDate = new Date(dateArr[2], dateArr[1] - 1, dateArr[0], dateArr[3], dateArr[4]);


     let allSeconds = (enDate - date) / 1000;
     let dayDiff = zero(Math.floor(allSeconds / 60 / 60 / 24));
     let houresDiff = zero(Math.floor(allSeconds / 60 / 60) % 24);
     let minutesDiff = zero(Math.floor(allSeconds / 60) % 60);
     let secondsDiff = zero(Math.floor(allSeconds) % 60);

     day.innerHTML = dayDiff;
     houres.innerHTML = houresDiff;
     minutes.innerHTML = minutesDiff;
     seconds.innerHTML = secondsDiff;
}, 1000);

function zero(str) {
     let res = str < 10 ? '0' + str : str;
     return res
}


// let date = new  Date();

// let num = "01.06.2022 11:00".split(' ');

// let coll = num[0].split('.').concat(num[1].split(':'));
// let enDate = new Date(coll[2],coll[1]-1,coll[0],coll[3],coll[4]);

// let milisec = (enDate - date)/1000;
// let day = Math.floor(milisec/60/60/24);
// let houres = Math.floor(milisec/60/60) % 24;
// let minutes = Math.floor(milisec/60) % 60;
// let sec = Math.floor(milisec) % 60;
