var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var randButton = document.getElementsByTagName("button")[0];

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// Display the initial CSS linear gradient property on page load
window.setGradient();

// generate random color code
var color = {
	random1: function() {
	  var result = '#';
	  for (var i = 0; i < 6; i++) {
	    result += Math.floor(Math.random() * 16).toString(16);
	  }
	  return result;
	},

	random2: function() {
	  var result = '#';
	  for (var i = 0; i < 6; i++) {
	    result += Math.floor(Math.random() * 16).toString(16);
	  }
	  return result;
	}
}

function setRandom() {
	var randomColor1 = color.random1();
	var randomColor2 = color.random2();

	body.style.background =
	"linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
	
	css.textContent = body.style.background + ";";
}

randButton.addEventListener("click", setRandom);