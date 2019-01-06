let btn = document.querySelector("#btn-menu");
let navbar = document.querySelector("nav#navbar");
let btnClose = document.querySelector("#btn-close");

btn.addEventListener('click', function(){
	navbar.classList.toggle('navbar-off');
})
btnClose.addEventListener('click', function(){
	navbar.classList.toggle('navbar-off');
})