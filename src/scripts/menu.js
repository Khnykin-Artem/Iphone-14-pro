const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

function onMenuClick() {
  nav.classList.toggle('menu-open');
}

export { onMenuClick, menuButton };
