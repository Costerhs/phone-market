const header = () => {
    let headerIcon = document.querySelector('.header__logo');
    headerIcon.addEventListener('click', function () {
        window.scroll(0, 0)
    })
}

export default header;