const slides = [
	{
		"image":" ./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":" ./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":" ./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const image = document.querySelector(".banner-img")

const points = document.querySelector(".dots")

let clickRight = document.querySelector(".arrow_right");

let clickLeft = document.querySelector(".arrow_left");

const descriPtion = document.getElementById("text");

let arrayPoints = points.children;

let currentSlide = 0;

for (let i=0; i<slides.length; i++) {
	let bullet=document.createElement("div");
	bullet.classList.add("dot");
	points.appendChild(bullet);
	if (i==0) {
		bullet.classList.add("dot_selected");
	}
};


clickRight.addEventListener("click",()=>{
	arrayPoints[currentSlide].classList.remove("dot_selected");
	currentSlide++;

	if (currentSlide == slides.length) {
		currentSlide = 0;
	}

	image.src=slides[currentSlide].image;
	arrayPoints[currentSlide].classList.add("dot_selected");
    descriPtion.innerHTML=slides[currentSlide].tagLine;
});


clickLeft.addEventListener("click",()=>{
	arrayPoints[currentSlide].classList.remove("dot_selected");

	if(currentSlide<=0){
		currentSlide=slides.length;
	}

	currentSlide--;
 	image.src=slides[currentSlide].image;
	descriPtion.innerHTML=slides[currentSlide].tagLine;
	arrayPoints[currentSlide].classList.add("dot_selected");
});

