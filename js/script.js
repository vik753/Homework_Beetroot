const menuMobile = document.getElementById('menu-mobile');
const menu = document.getElementById('menu');

menuMobile.onclick = function (){
	menuMobile.classList.toggle('menu-mobile__after');
	menu.classList.toggle('open');
};
