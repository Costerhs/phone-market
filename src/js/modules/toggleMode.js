const toggleClass = () => {
    let dark = document.querySelector('.dark');
    let darkTitle = document.querySelector('.dark__title');
    let darkUnderTitle = document.querySelector('.dark__underTitle');
    let darkSubtitle = document.querySelector('.dark__subtitle');
    let modeName = document.querySelector('.mode')
    let sun = document.querySelector('.toggleMode__sun');
    let moon = document.querySelector('.toggleMode__moon');

    let tes = document.querySelectorAll('.dark-text');

    let sunImg = document.querySelector('.toggleMode__sun__img')
    let moonImg = document.querySelector('.toggleMode__moon__img')
    let sunText = document.querySelector('.toggleMode__sun__text')
    let moonText = document.querySelector('.toggleMode__moon__text')

    sun.addEventListener('click', function () {
        dark.style.background = 'white'
        darkSubtitle.style.color = '#222222'
        darkTitle.style.color = '#222222'
        darkUnderTitle.style.color = '#222222'

        modeName.textContent = 'light'

        moonImg.src = 'img/icon/darkMoon.svg'
        sunImg.src = 'img/icon/orangeSun.svg'
        moonText.style.color = '#222222'
        sunText.style.color = '#FF9209'
    });
    moon.addEventListener('click', function () {
        dark.style.background = '#222222'
        darkSubtitle.style.color = 'white'
        darkTitle.style.color = 'white'
        darkUnderTitle.style.color = 'white'

        modeName.textContent = 'dark'

        moonImg.src = 'img/icon/orangeMoon.svg'
        sunImg.src = 'img/icon/sun.svg'
        moonText.style.color = '#FF9209'
        sunText.style.color = 'white'
    })
}

export default toggleClass