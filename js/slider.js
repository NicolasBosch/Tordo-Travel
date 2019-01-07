var slider = document.querySelector("#main-slider");
var slides = slider.querySelectorAll(".slider-item");
var btnPrev = slider.querySelector("#prev-button");
var btnNext = slider.querySelector("#next-button");
var indicators = document.querySelectorAll(".indicator");
var amount = slides.length - 1;
var current = 0;
var intervalId = start();

function next(){
	slides[current].classList.toggle('fade');
	indicators[current].classList.toggle('indicator-active');
	if(current < amount){
		slides[current].nextElementSibling.classList.toggle('fade');
		indicators[current].nextElementSibling.classList.toggle('indicator-active');
		current++;
	}else{
		current = 0;
		slides[current].classList.toggle('fade');
		indicators[current].classList.toggle('indicator-active');
	}
}

function prev(){
	slides[current].classList.toggle('fade');
	indicators[current].classList.toggle('indicator-active');
	if(current == 0){
		current = amount;
		slides[current].classList.toggle('fade');
		indicators[current].classList.toggle('indicator-active');
	}else{
		slides[current].previousElementSibling.classList.toggle('fade');
		indicators[current].previousElementSibling.classList.toggle('indicator-active');
		current--;
	}
}

function start(){
	return setInterval(next,6000);
}

function resize(){
	let imgSize = document.querySelector(".slider-item img").clientHeight;
	slider.setAttribute("style","height:"+imgSize+"px");
}

window.addEventListener("resize",resize);
document.onload = resize();
btnPrev.addEventListener("click",prev);
btnNext.addEventListener("click",next);