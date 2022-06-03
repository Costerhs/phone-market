function showBurger() {
    let block = document.querySelector('.header__adaptive-menu');
    let navItem = document.querySelectorAll('.nav__item')
    let checkbox = document.querySelector('.header__checkbox');
    let checkboxBackground = document.querySelector('.header__checkbox-background')

    checkbox.addEventListener('click', function () {
        if (checkbox.checked === true) {
            block.style.right = '0px';
            checkboxBackground.style.background = 'url(./img/other/close.svg) no-repeat'
        } else {
            block.style.right = '-800px';
            checkboxBackground.style.background = 'url(./img/other/open.svg) no-repeat'
        }
    });
    navItem.forEach(el => {
        el.addEventListener('click', function () {
            block.style.right = '-800px'
        })
    })
}

export default showBurger;