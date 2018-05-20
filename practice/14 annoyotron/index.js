var finished = prompt("are we there yet?")

while ((finished.indexOf("yes") === -1) && (finished.indexOf("yeah") === -1)) {
	var finished = prompt("Are we there yet?")
}

alert("yay we made it")