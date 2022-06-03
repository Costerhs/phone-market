function showConfigDataInLayout(data) {
    let testimonials = document.querySelector('.testimonials__set');
    let appStore = document.querySelector('.download__appStore');
    let pricingTitle = document.querySelectorAll('.pricing__item__title');
    let pricingUnderTitle = document.querySelectorAll('.pricing__item__underTitle');
    let formWord = document.querySelectorAll('.form__word');

    appStore.href = data.appStoreLink;

    for (let el of data.testimonials) {
        testimonials.innerHTML += `<div class="set__cart">
        <div class="set__cont">
          <div class="set__title">${el.text}</div>
          <div class="set__allSubtitle">
            <div class="set-firstSubtitle" >${el.name}</div>
            <div class="set__secondSubtitle">${el.job}</div>
          </div>
        </div>
      </div>`
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