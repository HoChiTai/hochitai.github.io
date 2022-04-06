
const menus = document.querySelectorAll('.menu-item');

menus.forEach((item, index) => {
    item.onclick = function() {
        document.querySelector('.menu-item.menu-active').classList.remove('menu-active');
        this.classList.add('menu-active');
        document.querySelector('.content.active').classList.remove('active');
        document.getElementsByClassName('content')[index].classList.add('active');;
    }
});
