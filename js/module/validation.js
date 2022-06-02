export function validationText(element, errorText) {
    if (element.value.length === 0) {
        errorText.textContent = 'this field is required'
        return false
    } else if (element.value.length < 3) {
        errorText.textContent = 'must be more than 3 characters'
        return false
    }
    errorText.textContent = '';
    return element.value;
}
export function validationCheckbox(checkboxes, data, isChecked, errorCheckbox) {
    checkboxes.forEach(el => {
        if (el.checked === true) {
            data.howDidKnow.push(el.nextElementSibling.textContent)
            isChecked = true;
        }
    })
    if (isChecked === false) {
        errorCheckbox.style.display = 'block'
    } else {
        errorCheckbox.style.display = 'none'
    }
}
export function validationRadio(radio, data) {
    radio.forEach(el => {
        if (el.checked === true) data.plan = el.id;
    });
}