function pricingCreateItem(pricingData) {
    let pricingTitle = document.querySelectorAll('.pricing__item__title');
    let pricingUnderTitle = document.querySelectorAll('.pricing__item__underTitle');
    let formWord = document.querySelectorAll('.form__word');

    for (let i = 0; i < pricingTitle.length; i++) {
        pricingUnderTitle[i].textContent = upperCaseFirst(pricingData[i].name);
        pricingTitle[i].textContent = '$' + pricingData[i].price;
        formWord[i].textContent = upperCaseFirst(pricingData[i].name);
    }
    function upperCaseFirst(str) {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }
}

export default pricingCreateItem;