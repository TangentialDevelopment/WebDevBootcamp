var score = [0,0];
var p1 = document.getElementById("btn1");
var p2 = document.getElementById("btn2");
var reset = document.getElementById("btn3");
var p1Score = document.querySelector("#p1Score");
var p2Score = document.querySelector("#p2Score");

p1.addEventListener("click", function() {
	if (score[0] < 5 && score[1] < 5) {
		score[0] += 1;
	}
	if (score[0] === 5) {
		p1Score.style.color = 'green';
	}
	p1Score.innerHTML = score[0];
})

p2.addEventListener("click", function() {
	if (score[1] < 5 && score[0] < 5) {
		score[1] += 1;
	}
	if (score[1] === 5) {
		p2Score.style.color = 'green';
	}
	p2Score.innerHTML = score[1];
})

reset.addEventListener("click", function() {
	score = [0,0];
	p1Score.style.color = 'black';
	p2Score.style.color = 'black';
	p1Score.innerHTML = score[0];
	p2Score.innerHTML = score[1];
})
