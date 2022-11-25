let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomizedButton = document.getElementById("randomize-button");

function setGradient(randomColor1, randomColor2) {
	if (randomColor1 && randomColor2) {
		color1.value = randomColor1;
		color2.value = randomColor2;
	}
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColorPicker() {
	let randomColor1 = ("#" + (Math.floor(Math.random()*16777215).toString(16)));
	let randomColor2 = ("#" + (Math.floor(Math.random()*16777215).toString(16)));
	setGradient(randomColor1, randomColor2);
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomizedButton.addEventListener("click", randomColorPicker);

window.onload = function() {setGradient()};