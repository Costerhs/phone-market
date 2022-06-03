function setLink(data) {
  let appStore = document.querySelector('.btnApp');
  let btnLink = document.querySelectorAll('.block-link');

  btnLink.forEach(el => {
    let btn = document.createElement('button');
    let link = document.createElement('a');

    btn.classList.add('btnApp');
    link.classList.add('link');

    link.href = data.appStoreLink;
    link.target = '__blank'
    btn.textContent = 'GET THIS APP'

    link.append(btn);
    el.append(link)
  })
  appStore.href = data.appStoreLink;
}

export default setLink