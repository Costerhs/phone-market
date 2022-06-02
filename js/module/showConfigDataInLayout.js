function showConfigDataInLayout(data) {
    let testimonials = document.querySelector('.testimonials__set');
    let appStore = document.querySelector('.download__appStore');
    let pricingTitle = document.querySelectorAll('.pricing__item__title');
    let pricingUnderTitle = document.querySelectorAll('.pricing__item__underTitle');
    let formWord = document.querySelectorAll('.form__word');

    appStore.href = data.appStoreLink;
    for (let el of data.testimonials) {
        let cart = document.createElement('div');
        let container = document.createElement('div');
        let title = document.createElement('div');
        let allSubtitle = document.createElement('div');
        let firstSubtitle = document.createElement('div');
        let secondSubtitle = document.createElement('div');

        title.textContent = el.text;
        firstSubtitle.textContent = el.name;
        secondSubtitle.textContent = el.job;

        cart.append(container);
        container.append(title, allSubtitle);
        allSubtitle.append(firstSubtitle, secondSubtitle);
        testimonials.append(cart);

        cart.classList.add('set__cart');
        container.classList.add('set__cont');
        title.classList.add('set__title');
        allSubtitle.classList.add('set__allSubtitle');
        firstSubtitle.classList.add('set-firstSubtitle');
        secondSubtitle.classList.add('set__secondSubtitle');
    }

    for (let i = 0; i < pricingTitle.length; i++) {
        pricingUnderTitle[i].textContent = upperCaseFirst(data.plans[i].name);
        pricingTitle[i].textContent = '$' + data.plans[i].price;
        formWord[i].textContent = upperCaseFirst(data.plans[i].name);
    }



    function upperCaseFirst(str) {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }
}

export default showConfigDataInLayout