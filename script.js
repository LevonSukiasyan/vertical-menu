let menu = document.querySelector('.menu');
let burger = document.querySelector('.burger');
let list = document.querySelector('.menu-list');

burger.addEventListener('click', function () {
    this.classList.toggle('click-button');

    menu.classList.toggle('click-menu')
    list.classList.toggle('click-list')
})

let active = true, heroName = "Санта";

console.log(active && heroName);
