function setLink(data) {
  let appStore = document.querySelector('.download__appStore');
  let btnApp = document.querySelectorAll('.link');

  btnApp.forEach(el => {
    el.href = data.appStoreLink;
  })
  appStore.href = data.appStoreLink;
}

export default setLink