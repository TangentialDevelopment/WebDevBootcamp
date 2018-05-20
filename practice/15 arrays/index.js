window.setTimeout(function() {
	var todos = [];

	var input = prompt("what would you like to do?")
	while (input !== "quit") {
		if (input === "list") {
			listTodos()
		} else if (input === "new") {
			addTodo()
		} else if(input === "delete") {
			deleteTodo()
		}

		input = prompt("what would you like to do?")
	}

	console.log("ok, you quit the app")
}, 500);

function listTodos() {
	console.log("*****")
	todos.forEach(function(todo, i) {
		console.log(i + ": " + todo);
	})
	console.log("*****")
}

function addTodo() {
	var newTodo = prompt("enter new todo");
	console.log("Added Todo")
	todos.push(newTodo);
}

function deleteTodo() {
	var index = prompt("Enter index of todo to delete");
	// splice(where to delete from, how many entries to delete)
	todos.splice(index, 1);
	console.log("Deleted Todo")
}
