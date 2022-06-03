const toggleClass = () => {
    let dark = document.querySelector('.dark');
    let darkText = document.querySelectorAll('.dark__text')
    let undertitle = document.querySelector('.dark__underTitle')
    let modeName = document.querySelector('.mode')
    let sun = document.querySelector('.toggleMode__sun');
    let moon = document.querySelector('.toggleMode__moon');

    let sunImg = document.querySelector('.toggleMode__sun__img')
    let moonImg = document.querySelector('.toggleMode__moon__img')
    let sunText = document.querySelector('.toggleMode__sun__text')
    let moonText = document.querySelector('.toggleMode__moon__text')

    sun.addEventListener('click', function () {
        dark.style.background = 'white'
        darkText.forEach(el => el.style.color = '#222222')

        undertitle.textContent = 'LIGHT MODE'
        modeName.textContent = 'light'

        moonImg.src = 'img/icon/darkMoon.svg'
        sunImg.src = 'img/icon/orangeSun.svg'
        moonText.style.color = '#222222'
        sunText.style.color = '#FF9209'
    });
    moon.addEventListener('click', function () {
        dark.style.background = '#222222'
        darkText.forEach(el => el.style.color = 'white')

        undertitle.textContent = 'DARK MODE'
        modeName.textContent = 'dark'

        moonImg.src = 'img/icon/orangeMoon.svg'
        sunImg.src = 'img/icon/sun.svg'
        moonText.style.color = '#FF9209'
        sunText.style.color = 'white'
    })
}

export default toggleClass