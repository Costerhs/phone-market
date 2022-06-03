import { validationCheckbox, validationRadio, validationText } from "./validation.js";
const sendData = () => {
    let form = document.querySelector('.form-container--none');
    let formBtn = document.querySelector('.form__btn')
    let loader = document.querySelector('.loader');

    let name = document.querySelector('.input-type-name');
    let email = document.querySelector('.input-type-email');
    let checkboxes = document.querySelectorAll('.checkbox__input');
    let radios = document.querySelectorAll('.form__radio');

    let errorTextName = document.querySelector('.error-name');
    let errorTextEmail = document.querySelector('.error-email');
    let errorCheckbox = document.querySelector('.error-checkbox');

    function toggleClassForm() {
        form.classList.toggle('formContainer');
        form.classList.toggle('form-container--none');
    }
    function resetForm() {
        name.value = '';
        email.value = '';
        checkboxes.forEach(el => el.checked = false)
    }
    formBtn.addEventListener('click', function () {
        let data = { name: '', email: '', howDidKnow: [], plan: '' };
        let isChecked = false;

        validationCheckbox(checkboxes, data, isChecked, errorCheckbox);
        validationRadio(radios, data);
        data.name = validationText(name, errorTextName);
        data.email = validationText(email, errorTextEmail);

        if (Object.values(data).every((el) => el.length > 0)) {
            loader.style.display = 'flex';
            setTimeout(() => {
                loader.style.display = 'none';
                console.log(data);
                toggleClassForm();
                resetForm()
            }, 2000);
        }
    });
}

export default sendData;