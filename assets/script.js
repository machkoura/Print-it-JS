const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let image= document.querySelector(".banner-img")

let points= document.querySelector(".dots")

let clickRight=document.querySelector(" .arrow_right");

let clickLeft=document.querySelector(".arrow_left");

let descriPtion=document.getElementById("#text");

let arrayPoints=points.children;

let currenSlide=0;