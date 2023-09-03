const hamburger = document.querySelector('.hamburger_btn');
const smallDeviceMenu = document.querySelector('.smallDeviceMenu');


hamburger.onclick = function() {
    smallDeviceMenu.classList.toggle('open');
}
