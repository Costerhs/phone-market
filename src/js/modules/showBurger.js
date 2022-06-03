function showBurger() {
    let block = document.querySelector('.header__adaptive-menu');
    let navItem = document.querySelectorAll('.nav__item')
    let checkbox = document.querySelector('.header__checkbox');
    let checkboxBackground = document.querySelector('.header__checkbox-background')

    checkbox.addEventListener('click', function () {
        if (checkbox.checked === true) {
            block.style.right = '0px';
            checkboxBackground.classList.toggle('header__checkbox-background-on');
            checkboxBackground.classList.toggle('header__checkbox-background-off');
        } else {
            block.style.right = '-800px';
            checkboxBackground.classList.toggle('header__checkbox-background-on');
            checkboxBackground.classList.toggle('header__checkbox-background-off');
        }
    });
    navItem.forEach(el => {
        el.addEventListener('click', function () {
            checkbox.checked = false
            block.style.right = '-800px';
            checkboxBackground.classList.toggle('header__checkbox-background-on');
            checkboxBackground.classList.toggle('header__checkbox-background-off');
        })
    })
}

export default showBurger;