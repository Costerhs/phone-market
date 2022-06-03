const openCloseForm = () => {
    let btnInHeader = document.querySelector('.btnApp');
    let form = document.querySelector('.form-container--none');
    let formClose = document.querySelector('.form__close');

    let mainBtn = document.querySelector('.main__btn');

    let standartBtn = document.querySelector('.pricing__item__button--blues');
    let premiumBtn = document.querySelector('.pricing__item__button--lists');
    let lifetimeBtn = document.querySelector('.pricing__item__button--varied');


    function toggleClassFormWithChooseRadio(event) {
        form.classList.toggle('formContainer');
        form.classList.toggle('form-container--none');

        precheckPlan(event);
    }
    function precheckPlan(name) {
        let checkbox = document.getElementById(`${name}`) || document.getElementById('lifetime');
        checkbox.checked = true;
    }

    btnInHeader.addEventListener('click', toggleClassFormWithChooseRadio.bind(this, 'lifetime'));
    formClose.addEventListener('click', toggleClassFormWithChooseRadio);
    mainBtn.addEventListener('click', toggleClassFormWithChooseRadio.bind(this, 'lifetime'));
    standartBtn.addEventListener('click', toggleClassFormWithChooseRadio.bind(this, 'standart'));
    premiumBtn.addEventListener('click', toggleClassFormWithChooseRadio.bind(this, 'premium'));
    lifetimeBtn.addEventListener('click', toggleClassFormWithChooseRadio.bind(this, 'lifetime'));
}

export default openCloseForm;

