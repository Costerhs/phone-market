const form = () => {
    function toggleClassForm(event) {
        form.classList.toggle('formContainer');
        form.classList.toggle('form-container-none');

        if (event === 'premium') {
            formBtnPremium.checked = true
        } else if (event === 'standart') {
            formBtnStandart.checked = true
        } else {
            formBtnLife.checked = true
        }
    }

    let btnInHeader = document.querySelector('.btnApp');
    let form = document.querySelector('.form-container-none');
    let formClose = document.querySelector('.form__close');

    let formBtnStandart = document.querySelector('#standart');
    let formBtnPremium = document.querySelector('#premium');
    let formBtnLife = document.querySelector('#lifetime');

    let mainBtn = document.querySelector('.main__btn');

    let standartBtn = document.querySelector('.pricing__item__button--blues');
    let premiumBtn = document.querySelector('.pricing__item__button--lists');
    let lifetimeBtn = document.querySelector('.pricing__item__button--varied');

    btnInHeader.addEventListener('click', toggleClassForm);
    formClose.addEventListener('click', toggleClassForm.bind(this, -1));
    mainBtn.addEventListener('click', toggleClassForm);
    standartBtn.addEventListener('click', toggleClassForm.bind(this, 'standart'));
    premiumBtn.addEventListener('click', toggleClassForm.bind(this, 'premium'));
    lifetimeBtn.addEventListener('click', toggleClassForm.bind(this, 'lifetime'));
}

export default form;