function testimonialsCreateItem(testimonialsData) {
  let testimonials = document.querySelector('.testimonials__set');

  for (let el of testimonialsData) {
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
}

export default testimonialsCreateItem