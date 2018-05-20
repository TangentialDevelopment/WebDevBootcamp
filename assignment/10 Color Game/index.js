var numberOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll('.mode');

init()

function setupModeBtn () {
	for (var i=0; i<modeBtn.length; i++) {
		modeBtn[i].addEventListener("click", function() {
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
			reset();
		})
	}
}

function setupSquares () {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;

			if (clickedColor === pickedColor) {
				messageDisplay.innerHTML = "Correct";
				resetBtn.innerHTML = "Play Again?";
				changeColors(clickedColor)
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.innerHTML = "Try Again";
			}
		});
	}
}

function init () {
	setupModeBtn();
	setupSquares();
	reset();
}

// easyBtn.addEventListener("click", function() {
// 	numberOfSquares = 3;
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");

// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.innerHTML = pickedColor;
// 	for (var i=0; i<squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// })

// hardBtn.addEventListener("click", function() {
// 	numberOfSquares = 6;
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");

// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.innerHTML = pickedColor;
// 	for (var i=0; i<squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 		}
// 	}

// })

function reset() {
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.innerHTML = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
	resetBtn.innerHTML = "New Colors";
	messageDisplay.innerHTML = "";
}

resetBtn.addEventListener("click", function() {
	// colors = generateRandomColors(numberOfSquares);
	// pickedColor = pickColor();
	// colorDisplay.innerHTML = pickedColor;
	// for (var i = 0; i < squares.length; i++) {
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.backgroundColor = "steelblue";

	reset();
})


function changeColors (color) {
	for (var i=0; i<colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor () {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors (num) {
	var final = [];

	for (var i=0; i<num; i++) {
		final.push(randomColor())
	}

	return final;
}

function randomColor () {
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	var final = "rgb(" + r + ", " + g + ", " + b +")";
	return final;
}